import { NextResponse } from 'next/server';
import { createClient } from '../../auth/supabase/server';
import { fetchUserAws } from './_providers/_aws';
import { fetchUserSupabase } from './_providers/_supabase';

export async function GET() {
  const context = 'FetchUser.GET';
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    console.error(
      'Unauthorized access attempt',
      error || new Error('No user data'),
      { context }
    );
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const userId = data.user.id;

    if (process.env.ENABLE_API_USERS_FOR_BACKEND === 'true') {
      const result = await fetchUserAws(userId);

      if (!result.ok) {
        console.error(
          'Failed to fetch user data from AWS',
          new Error('error-aws'),
          {
            context,
            userId,
            status: result.status,
          }
        );
        return NextResponse.json(
          { error: 'Failed to fetch user data' },
          { status: result.status }
        );
      }

      const user = await result.json();
      console.info('Successfully fetched user data from AWS', {
        context,
        userId,
      });

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
    } else {
      const user = await fetchUserSupabase(data.user);
      console.info('Successfully fetched user data from Supabase', {
        context,
        userId,
      });
      return NextResponse.json(user, { status: 200 });
    }
  } catch (error) {
    console.error(
      'Error fetching user data',
      new Error('Error fetching user data'),
      { context }
    );
    return NextResponse.json(
      { error: 'Error fetching user data' },
      { status: 500 }
    );
  }
}
