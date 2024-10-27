import { signAwsRequest } from '@/app/shared/utils/signAwsRequest';

export async function createUserAws(body: unknown): Promise<Response> {
  const url = `${process.env.API_USERS_URL}/${process.env.ENVIRONMENT}/users`;

  const signedReq = await signAwsRequest({
    url: url,
    method: 'POST',
    body: JSON.stringify(body),
    region: process.env.REGION as string,
    accessKeyId: process.env.AWS_KEY_ID as string,
    secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY as string,
  });

  const result = await fetch(url, {
    method: 'POST',
    headers: signedReq.headers,
    body: JSON.stringify(body),
  });

  return result;
}
