import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_KEY as string, {
  apiVersion: '2024-06-20',
  typescript: true,
});

export class StripeService {
  async createCustomer(
    email: string,
    name: string,
    tenantId: string
  ): Promise<string> {
    const customer = await stripe.customers.create({
      email,
      name,
      metadata: {
        tenantId,
      },
    });

    return customer.id;
  }

  async deleteCustomer(customerId: string): Promise<void> {
    await stripe.customers.del(customerId);
  }

  async fetchSubscriptionName(subscriptionId: string): Promise<string> {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    return subscription.items.data[0].plan.nickname || '';
  }
}
