import { getAuth } from '@/app/lib/auth/auth';
import { Roboto } from 'next/font/google';
import React from 'react';

const roboto = Roboto({
      weight: "400",
      subsets: ['latin']
})

/**
 * Make the account page asynchronous to fetch data from the server
 * @returns 
 */

export default async function AccountSettings() {

      const { user } = await getAuth();

      //Fetch the user data from an api endpoint
      const users = await fetch("http://localhost:3000/api/usercredentials", {
            method: "POST",
            body: JSON.stringify(user?.email)
      }).then(res => res.json());

      return (
            <main className={`${roboto.className} container mx-auto h-screen`}>
                  <h1 className='text-[50px] font-thin'> Hi,
                        <span className='text-green-400'>{users.firstName}</span>
                  </h1>

                  <div className='grid grid-cols-6 place-items-center justify-items-start font-light'>

                        <div className='infosection col-span-2'>
                              <div className='full--name'>
                                    <span> Name: </span>
                              </div>

                              <div className='email'>
                                    <span> E-Mail: </span>
                              </div>

                              <div className='birthday'>
                                    <span> Geburtstag: </span>
                              </div>

                              <div className='registered--at'>
                                    <span> Registriert seit: </span>
                              </div>
                        </div>

                        <div className='datasection col-span-4'>
                              <div className='full--name'>
                                    <span> { users.firstName} { users.lastName }</span>
                              </div>

                              <div className='email'>
                                    <span> { users.email }</span>
                              </div>

                              <div className='birthday'>
                                    <span> - </span>
                              </div>

                              <div className='registered--at'>
                                    <span> - </span>
                              </div>
                        </div>

                  </div>
            </main>
      )
}
