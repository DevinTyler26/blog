import { NextResponse } from 'next/server';
import getPostMetadata from '@/components/getPostMetadata';

export async function GET(request: Request) {
  const _requestHeaders = new Headers(request.headers);
  const content = getPostMetadata();
  const currentDate = new Date();
  const timezoneOffset = currentDate.getTimezoneOffset();
  currentDate.setMinutes(currentDate.getMinutes() - timezoneOffset);
  const posts = content
    .filter((obj) => {
      const objDate = new Date(obj.date);
      return objDate <= currentDate;
    })
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  return NextResponse.json({ success: true, data: posts, currentDate });
}

export const revalidate = 60;
