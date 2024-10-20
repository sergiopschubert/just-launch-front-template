import {
  AuthError,
  AuthTokenResponsePassword,
  UserResponse,
} from '@supabase/supabase-js';

export interface IAuthProvider {
  login(data: {
    email: string;
    password: string;
  }): Promise<AuthTokenResponsePassword>;
  logout(): Promise<{
    error: AuthError | null;
  }>;
  resetPassword?(email: string): Promise<
    | {
        data: {};
        error: null;
      }
    | {
        data: null;
        error: AuthError;
      }
  >;
}
