import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth';
import { stripe } from '@/app/shared/@JustLaunch/services/stripe/client';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const session = await getServerSession(nextAuthOptions);

  if (session?.user && session.user.id) {
    try {
      const { plan, customer, locale } = await req.json();

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

      return NextResponse.json({ url: stripeSession.url }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { error: 'Error creating checkout session' },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
