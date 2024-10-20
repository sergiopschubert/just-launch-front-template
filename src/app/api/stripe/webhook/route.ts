import { SubscriptionStatus } from '@/app/shared/@JustLaunch/domain/enums/SubscriptionStatus';
import { logger } from '@/app/shared/@JustLaunch/services/logger/client';
import { stripe } from '@/app/shared/@JustLaunch/services/stripe/client';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { adminAuthClient } from '../../auth/supabase/adminServer';

const subscriptionStatusMap: Record<string, string> = {
  incomplete: SubscriptionStatus.RETRY,
  incomplete_expired: SubscriptionStatus.CANCELED,
  active: SubscriptionStatus.ACTIVE,
  past_due: SubscriptionStatus.RETRY,
  canceled: SubscriptionStatus.CANCELED,
  trialing: SubscriptionStatus.ACTIVE,
};

export async function POST(req: Request, res: Response) {
  const context = 'StripeWebhook.POST';

  const signature = req.headers.get('stripe-signature') as string;
  const body = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    logger.info('Stripe webhook event constructed successfully', {
      context,
      eventId: event.id,
      eventType: event.type,
    });
  } catch (err: any) {
    logger.error('Webhook Error: StripeWebhook.POST', err.message, {
      context,
      error: err,
    });
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      const subscription = event.data.object as Stripe.Subscription;
      await handleSubscriptionEvent(subscription);
      break;
    default:
      logger.warn(`Unhandled event type ${event.type}`, {
        context,
        eventId: event.id,
      });
  }

  return NextResponse.json({ status: 200 });
}

async function handleSubscriptionEvent(subscription: Stripe.Subscription) {
  const context = 'StripeWebhook.handleSubscriptionEvent';

  const customerId = subscription.customer as string;
  const subscriptionStatus = subscription.status;
  const subscriptionId = subscription.id;

  const mappedStatus = subscriptionStatusMap[subscriptionStatus] || 'UNKNOWN';

  logger.info(`Processing subscription event for customer ${customerId}`, {
    context,
    subscriptionId,
    status: subscriptionStatus,
  });

  const user = (await stripe.customers.retrieve(customerId)) as Stripe.Customer;
  const userId = user.metadata?.tenantId;

  const { error } = await adminAuthClient.updateUserById(userId, {
    user_metadata: {
      subscription_id: subscriptionId,
      subscription_status: subscriptionStatus,
    },
  });

  if (error) {
    logger.error(`Failed to update user ${userId}`, error, {
      context,
      customerId,
      subscriptionId,
      mappedStatus,
    });
  } else {
    logger.info(
      `Successfully updated user ${userId} subscription status to ${mappedStatus}`,
      {
        context,
        customerId,
        subscriptionId,
        mappedStatus,
      }
    );
  }
}
