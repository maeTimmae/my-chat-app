
import MessageInput from '@/app/components/MessageInput';
import { getAuth } from '@/app/lib/auth/auth'
import { lucia } from '@/app/lib/auth/lucia'
import { redirect } from 'next/dist/client/components/redirect';
import { NextResponse } from 'next/server';
import React from 'react'

export default async function page() {

  const user = await getAuth();

  if(!user.session) {
    return redirect("/pages/login");
  }

  return (
    <main></main>
  )
}
