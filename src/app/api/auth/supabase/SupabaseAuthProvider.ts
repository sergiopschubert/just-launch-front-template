import { IAuthProvider } from '../interfaces/IAuthProvider';
import { createClient } from './client';

export class SupabaseAuthProvider implements IAuthProvider {
  private supabase = createClient();

  async login({ email, password }: { email: string; password: string }) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  async logout() {
    return this.supabase.auth.signOut();
  }

  async resetPassword(email: string) {
    return this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: process.env.NEXT_PUBLIC_RESET_PASSWORD_URL,
    });
  }
}
