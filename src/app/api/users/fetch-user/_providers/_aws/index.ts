import { signAwsRequest } from '@/app/shared/utils/signAwsRequest';

export async function fetchUserAws(id: string): Promise<Response> {
  const url = `${process.env.API_USERS_URL}/${process.env.ENVIRONMENT}/users/${id}`;
  const signedReq = await signAwsRequest({
    url: url,
    method: 'GET',
    region: process.env.REGION as string,
    accessKeyId: process.env.AWS_KEY_ID as string,
    secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY as string,
  });
  const result = await fetch(url, {
    method: 'GET',
    headers: signedReq.headers,
  });
  return result;
}
