import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './utils/providers/authOptions';

export { default } from 'next-auth/middleware';

export const config = { matcher: ['/gallery'] };
