import { Plans } from '@/app/shared/@JustLaunch/domain/enums/Plans';
import { SubscriptionStatus } from '@/app/shared/@JustLaunch/domain/enums/SubscriptionStatus';
import { StripeService } from '@/app/shared/@JustLaunch/services/stripe/client';
import { User } from '@supabase/supabase-js';
import { differenceInDays } from 'date-fns';

export async function fetchUserSupabase(user: User): Promise<Object> {
  const stripe = new StripeService();
  const userMetadata = user.user_metadata;
  const subscriptionStatus = userMetadata.subscription_status;
  const subscriptionId = userMetadata.subscription_id;

  let planName: string = Plans.FREE_TRIAL;

  if (isSubscriptionActiveOrRetry(subscriptionStatus) && subscriptionId) {
    planName = await stripe.fetchSubscriptionName(subscriptionId);
  }

  return {
    subscription_status: subscriptionStatus,
    plan_name: planName,
    free_trial: isFreeTrial(user.created_at),
    limits: userMetadata.limits,
    customer_id: userMetadata.customer_id,
    is_confirmed: userMetadata.is_confirmed,
    first_name: userMetadata.name.split(' ')[0],
    email: user.email,
    tenant_id: user.id,
  };
}

function isSubscriptionActiveOrRetry(subscriptionStatus: string): boolean {
  return (
    subscriptionStatus === SubscriptionStatus.ACTIVE ||
    subscriptionStatus === SubscriptionStatus.RETRY
  );
}

function isFreeTrial(created_at: string): boolean {
  const currentDate = new Date();
  const diffDays = differenceInDays(currentDate, new Date(created_at));
  return diffDays <= 7;
}
