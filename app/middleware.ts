import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(`Incoming request to: ${request.url}`);
  
  // Bisa tambahkan logika tambahan di sini, misalnya autentikasi atau otorisasi
  
  return NextResponse.next();
}

// Atur pattern untuk middleware hanya berjalan di rute yang diinginkan
export const config = {
  matcher: ['/api/register'],
};