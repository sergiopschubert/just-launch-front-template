import { stripe } from '@/app/shared/@JustLaunch/services/stripe/client';
import { NextResponse } from 'next/server';
import { logger } from '@/app/shared/@JustLaunch/services/logger/client';

export async function POST(req: Request) {
  const context = 'CreateCheckoutSession.POST';

  try {
    const { plan, customer, locale } = await req.json();
    logger.info('Received request to create checkout session', {
      context,
      plan,
      customer,
      locale,
    });

    const prices = await stripe.prices.list({
      limit: 16,
    });

    const price = prices.data.find(
      (price) =>
        price.nickname === plan &&
        (locale === 'Português'
          ? price.currency === 'brl'
          : price.currency === 'usd')
    );

    if (!price) {
      logger.error(
        'Price not found for the given plan and locale',
        new Error(),
        {
          context,
          plan,
          locale,
        }
      );
      return NextResponse.json({ error: 'Price not found' }, { status: 404 });
    }

    const stripeSession = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      customer,
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/`,
      allow_promotion_codes: true,
    });

    logger.info('Checkout session created successfully', {
      context,
      customer,
      sessionUrl: stripeSession.url,
    });

    return NextResponse.json({ url: stripeSession.url }, { status: 200 });
  } catch (error: any) {
    logger.error('Error creating checkout session', error.message, { context });
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}
