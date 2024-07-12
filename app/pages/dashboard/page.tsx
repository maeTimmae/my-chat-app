
import { getAuth } from '@/app/lib/auth/auth'
import { lucia } from '@/app/lib/auth/lucia'
import { redirect } from 'next/dist/client/components/redirect';
import { NextResponse } from 'next/server';
import React from 'react'

export default async function page() {

  const user = await getAuth();

  console.log("USER");
  console.log(user);

  if(!user.session) {
    return redirect("/pages/login");
  }

  return (
    <div>Welcome you are on the dashboard now!</div>
  )
}
