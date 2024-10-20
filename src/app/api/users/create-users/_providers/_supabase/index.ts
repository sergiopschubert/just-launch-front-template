import { adminAuthClient } from '@/app/api/auth/supabase/adminServer';
import { StripeService } from '@/app/shared/@JustLaunch/services/stripe/client';
import { UserResponse } from '@supabase/supabase-js';

interface CreateUserRequestBody {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

interface UserModel {
  name: string;
  subscription_id: string | null;
  is_confirmed: boolean;
  customer_id?: string;
  referral_id: string;
  subscription_status: string;
}

export async function createUserSupabase(
  body: CreateUserRequestBody
): Promise<UserResponse> {
  const { email, password, name } = body;
  const stripe = new StripeService();

  const userMetadata: Partial<UserModel> = {
    name: name,
    subscription_id: null,
    is_confirmed: false,
    subscription_status: 'PENDING',
    referral_id: generateReferralId(),
  };

  const useStripe = process.env.USE_STRIPE === 'true';
  const useBrevo = process.env.USE_BREVO === 'true';

  const result = await adminAuthClient.createUser({
    email,
    password,
    user_metadata: { ...userMetadata },
    email_confirm: true,
  });

  if (result.error) {
    console.error('Error signing up:', result.error);
    return result;
  }

  if (useStripe) {
    const customer_id = await stripe.createCustomer(
      email,
      name,
      result.data.user.id!
    );
    userMetadata.customer_id = customer_id;

    const { error } = await adminAuthClient.updateUserById(
      result.data.user.id,
      {
        user_metadata: {
          customer_id: customer_id,
        },
      }
    );

    if (error) {
      await stripe.deleteCustomer(customer_id);
    }
  }

  if (useBrevo) {
    await createBrevoContact(email, name);
  }

  return result;
}

function generateReferralId(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

async function createBrevoContact(email: string, name: string): Promise<void> {
  const brevoApiKey = process.env.BREVO_API_KEY!;
  const brevoListId = parseInt(process.env.BREVO_LIST_ID!, 10);

  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': brevoApiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email,
      attributes: {
        FNAME: name,
      },
      listIds: [brevoListId],
      updateEnabled: false,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Brevo API error: ${errorData.message || response.statusText}`
    );
  }
}
