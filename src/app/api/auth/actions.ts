import { IAuthProvider } from './interfaces/IAuthProvider';
import { SupabaseAuthProvider } from './supabase/SupabaseAuthProvider';

export class Auth {
  private static provider: IAuthProvider;

  private static initializeProvider() {
    const authProviders: Record<string, IAuthProvider> = {
      SUPABASE: new SupabaseAuthProvider(),
    };

    const authType = process.env.NEXT_PUBLIC_AUTH_TYPE;

    if (!authType || !authProviders[authType]) {
      throw new Error('Invalid auth type');
    }

    this.provider = authProviders[authType];
  }

  static async signIn(email: string, password: string) {
    if (!this.provider) {
      this.initializeProvider();
    }
    return this.provider.login({ email, password });
  }

  static async signOut() {
    if (!this.provider) {
      this.initializeProvider();
    }
    return this.provider.logout();
  }

  static async resetPassword(email: string) {
    if (!this.provider) {
      this.initializeProvider();
    }
    if (this.provider.resetPassword) {
      return this.provider.resetPassword(email);
    }
    throw new Error('Reset password not implemented for this auth provider');
  }
}
