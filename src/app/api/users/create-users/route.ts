import { NextResponse } from 'next/server';
import { createUserAws } from './_providers/_aws';
import { createUserSupabase } from './_providers/_supabase';

export async function POST(req: Request) {
  const context = 'CreateUser.POST';

  try {
    const body = await req.json();
    console.info('Received request to create user', { context, body });

    if (process.env.ENABLE_API_USERS_FOR_BACKEND === 'true') {
      const awsResult = await createUserAws(body);

      if (!awsResult.ok) {
        console.error('Failed to create user in AWS', new Error(), {
          context,
          status: awsResult.status,
          body,
        });
        return NextResponse.json(
          { error: 'error - aws' },
          { status: awsResult.status }
        );
      }
      console.info('User created successfully in AWS', { context, body });
    }

    const supabaseResult = await createUserSupabase(body);

    if (supabaseResult.error) {
      console.error('Failed to create user in Supabase', supabaseResult.error, {
        context,
        body,
      });
      return NextResponse.json({ error: 'error - supabase' }, { status: 500 });
    }

    console.info('User created successfully in Supabase', { context, body });
    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (error: any) {
    console.error('Error during user creation', error.message, { context });
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
}
