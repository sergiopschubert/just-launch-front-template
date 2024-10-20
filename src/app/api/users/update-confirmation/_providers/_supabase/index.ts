import { adminAuthClient } from '@/app/api/auth/supabase/adminServer';

export async function updateConfirmationUserSupabase(
  id: string
): Promise<void> {
  const { error } = await adminAuthClient.updateUserById(id, {
    user_metadata: {
      is_confirmed: true,
    },
  });

  if (error) {
    throw error;
  }
}
