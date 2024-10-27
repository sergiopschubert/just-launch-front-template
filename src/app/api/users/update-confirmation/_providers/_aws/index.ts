import { signAwsRequest } from '@/app/shared/utils/signAwsRequest';

export async function updateConfirmationUserAws(
  id: string,
  body: string
): Promise<void> {
  const url = `${process.env.API_USERS_URL}/${process.env.ENVIRONMENT}/users`;

  const signedReq = await signAwsRequest({
    url: url,
    method: 'PUT',
    region: process.env.REGION as string,
    accessKeyId: process.env.AWS_KEY_ID as string,
    secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY as string,
    tenantId: id,
    body,
  });
  await fetch(url, {
    method: 'PUT',
    headers: signedReq.headers,
    body,
  });
}
