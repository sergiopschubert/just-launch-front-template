import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth';
import { stripe } from '@/app/shared/@JustLaunch/services/stripe/client';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const session = await getServerSession(nextAuthOptions);

  if (session?.user && session.user.id) {
    try {
      const { customer } = await req.json();

      const stripeSession = await stripe.billingPortal.sessions.create({
        customer,
        return_url: `${process.env.NEXT_PUBLIC_DOMAIN}/settings`,
      });

      return NextResponse.json({ url: stripeSession.url }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { error: 'Error creating billing session' },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
