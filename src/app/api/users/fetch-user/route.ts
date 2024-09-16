import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth';
import { signAwsRequest } from '@/app/shared/utils/signAwsRequest';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await getServerSession(nextAuthOptions);

  if (session?.user && session.user.id) {
    try {
      const url = `${process.env.API_USERS_URL}/production/users/${session.user.id}`;
      const signedReq = await signAwsRequest({
        url: url,
        method: 'GET',
        region: process.env.REGION as string,
        accessKeyId: process.env.AWS_KEY_ID as string,
        secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY as string,
      });
      const result = await fetch(url, {
        method: 'GET',
        headers: signedReq.headers,
      });

      if (!result.ok) {
        return NextResponse.json(
          { error: 'Failed to fetch user data' },
          { status: result.status }
        );
      }

      const user = await result.json();

      return NextResponse.json(
        {
          subscription_status: user.subscription_status,
          free_trial: user.free_trial,
          plan_name: user.plan_name,
          limits: user.limits,
          customer_id: user.customer_id,
          is_confirmed: user.is_confirmed,
          first_name: user.name.split(' ')[0],
          email: user.email,
          tenant_id: user.tenant_id,
        },
        { status: result.status }
      );
    } catch (error) {
      return NextResponse.json(
        { error: 'Error fetching user data' },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
