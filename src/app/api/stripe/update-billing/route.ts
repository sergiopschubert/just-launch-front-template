import { stripe } from '@/app/shared/@JustLaunch/services/stripe/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const context = 'UpdateBilling.POST';

  try {
    const { customer } = await req.json();
    console.info('Received request to update billing session', {
      context,
      customer,
    });

    const stripeSession = await stripe.billingPortal.sessions.create({
      customer,
      return_url: `${process.env.NEXT_PUBLIC_DOMAIN}/settings`,
    });

    console.info('Billing session created successfully', {
      context,
      customer,
      sessionUrl: stripeSession.url,
    });

    return NextResponse.json({ url: stripeSession.url }, { status: 200 });
  } catch (error: any) {
    console.error('Error creating billing session', error.message, { context });
    return NextResponse.json(
      { error: 'Error creating billing session' },
      { status: 500 }
    );
  }
}
