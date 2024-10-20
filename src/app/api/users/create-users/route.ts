import { NextResponse } from 'next/server';
import { createUserAws } from './_providers/_aws';
import { createUserSupabase } from './_providers/_supabase';
import { logger } from '@/app/shared/@JustLaunch/services/logger/client';

export async function POST(req: Request) {
  const context = 'CreateUser.POST';

  try {
    const body = await req.json();
    logger.info('Received request to create user', { context, body });

    if (process.env.ENABLE_API_USERS_FOR_BACKEND === 'true') {
      const awsResult = await createUserAws(body);

      if (!awsResult.ok) {
        logger.error('Failed to create user in AWS', new Error(), {
          context,
          status: awsResult.status,
          body,
        });
        return NextResponse.json(
          { error: 'error - aws' },
          { status: awsResult.status }
        );
      }
      logger.info('User created successfully in AWS', { context, body });
    }

    const supabaseResult = await createUserSupabase(body);

    if (supabaseResult.error) {
      logger.error('Failed to create user in Supabase', supabaseResult.error, {
        context,
        body,
      });
      return NextResponse.json({ error: 'error - supabase' }, { status: 500 });
    }

    logger.info('User created successfully in Supabase', { context, body });
    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (error: any) {
    logger.error('Error during user creation', error.message, { context });
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
}
