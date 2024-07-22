
import Camera from '@/app/components/Camera';
import SearchBar from '@/app/components/SearchBar';
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

  const userCredentials = await fetch("http://localhost:3000/api/usercredentials", {
    method: "POST",
    body: JSON.stringify(user.user.email)
  }
  ).then(res => res.json());

  const firstLetter = userCredentials.firstName.substring(0,1);


  return (
    <main className='h-[90vh] w-[90vw] bg-opacity-50 bg-[#091109] backdrop-blur-md rounded-xl text-white justify-items-center place-items-center shadow-md shadow-[#3e3e3e]'>
       <div className="grid grid-cols-8 w-full h-full justify-items-center">
          <div className='flex flex-col col-span-2 gap-4 align-middle border-r-2 border-white border-opacity-15'>
            
            <div className='flex flex-row align-middle items-center gap-4 p-4 border-b-2 border-opacity-15 border-white'>
              <div className='flex justify-center items-center rounded-full h-6 w-6 p-8 bg-green-950 text-white self-center'>
                <span className='text-[x30px]'>{firstLetter}</span>
              </div>
              <div className='name text-[20px] font-extrabold'>
                <span>{userCredentials.firstName} {userCredentials.lastName}</span>
              </div>
              <div className='camera'>
                <Camera />
              </div>
            </div>
            <SearchBar />
          </div>
          <div className='grid grid-rows-2 col-span-4 justify-items-center w-full'>
            <div className='h-[40%] w-full border-b-2 border-white border-opacity-10'>
            </div>

            <div className="chat window"> window</div>
          </div>
          <div className='col-span-2 border-l-2 border-white border-opacity-10 w-full'>Account-Info</div>
       </div>
    </main>
  )
}
