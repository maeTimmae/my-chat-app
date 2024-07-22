
import { getAuth } from '@/app/lib/auth/auth'
import { lucia } from '@/app/lib/auth/lucia'
import { redirect } from 'next/dist/client/components/redirect';
import { NextResponse } from 'next/server';
import React from 'react'

export default async function page() {

  const user = await getAuth();

  if(!user.session) {
    console.log(user);
    return redirect("/pages/login");
  }

  return (
    <main className='grid grid-cols-4 container mx-auto min-w-fit min-h-fit shadow-md rounded-md'>
      <div className="contacts col-span-1 bg-green-800 rounded-tl-md rounded-bl-md p-2">
        <ul className=''>
          <li>Kontakt1</li>
          <li>Kontakt2</li>
        </ul>
      </div>
      <div className="chat bg-green-200 col-span-3 rounded-tr-md rounded-br-md p-2">
        hi
      </div>      
    </main>
  )
}
