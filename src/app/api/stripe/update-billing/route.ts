import { stripe } from '@/app/shared/@JustLaunch/services/stripe/client';
import { NextResponse } from 'next/server';
import { logger } from '@/app/shared/@JustLaunch/services/logger/client';

export async function POST(req: Request) {
  const context = 'UpdateBilling.POST';

  try {
    const { customer } = await req.json();
    logger.info('Received request to update billing session', {
      context,
      customer,
    });

    const stripeSession = await stripe.billingPortal.sessions.create({
      customer,
      return_url: `${process.env.NEXT_PUBLIC_DOMAIN}/settings`,
    });

    logger.info('Billing session created successfully', {
      context,
      customer,
      sessionUrl: stripeSession.url,
    });

    return NextResponse.json({ url: stripeSession.url }, { status: 200 });
  } catch (error: any) {
    logger.error('Error creating billing session', error.message, { context });
    return NextResponse.json(
      { error: 'Error creating billing session' },
      { status: 500 }
    );
  }
}
