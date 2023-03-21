import { NextResponse } from 'next/server';
import getPostContent from '@/components/getPostContent';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const content = getPostContent(params.slug);
  return NextResponse.json({ success: true, data: content });
}
