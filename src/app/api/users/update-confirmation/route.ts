import { headers } from 'next/headers';
import { updateConfirmationUserAws } from './_providers/_aws';
import { updateConfirmationUserSupabase } from './_providers/_supabase';

export async function PUT() {
  try {
    const headersList = headers();
    const tenantId = headersList.get('tenantId');

    if (!tenantId) {
      return Response.error();
    }

    const body = JSON.stringify({ is_confirmed: true });
    if (process.env.ENABLE_API_USERS_FOR_BACKEND === 'true') {
      await updateConfirmationUserAws(tenantId, body);
    } else {
      await updateConfirmationUserSupabase(tenantId);
    }

    return Response.json(true);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}
