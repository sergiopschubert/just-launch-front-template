import { signAwsRequest } from '@/app/shared/utils/signAwsRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const url = `${process.env.API_USERS_URL}/${process.env.API_USERS_URL}/users`;

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

    if (!result.ok) {
      return NextResponse.json({ error: 'error' }, { status: result.status });
    }

    return NextResponse.json({ message: 'success' }, { status: result.status });
  } catch (error) {
    return NextResponse.json({ error: 'error' }, { status: 500 });
  }
}
