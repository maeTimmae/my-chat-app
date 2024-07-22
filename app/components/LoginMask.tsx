"use client";
import React, { FormEvent } from 'react'
import { Urbanist } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAuth } from '../lib/auth/auth';

const urbanist = Urbanist({
    subsets: ["latin"],
})

export default function LoginMask() {
    const router = useRouter();

    const loginUser = async (event: FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();
        const userFormData = new FormData(event.currentTarget);
    
        try {
            fetch("/api/login", {
                method: "POST",
                body: userFormData,
            }).then( res => res.json())
              .then( res => {
                    if(res.status == 200)router.push("/pages/dashboard");
                    else router.push("/pages/login");
              }); 
    
        } catch (error) {
            console.error(error);
        }
    }   
    
    return (
    <div className={`${urbanist.className} text-center rounded-xl h-min w-[500px] bg-green-200 bg-opacity-20 p-4 shadow-md `}>
            <h1 className='mb-10 text-[30px] font-bold'>Login</h1>
            <div className='mb-10'>Werde Teil der <span className='text-green-500'>Spring</span><span className='text-green-900'>Chat</span>-Community! </div>
            <form method='POST' action={""} onSubmit={loginUser}>
                <div className='flex flex-col items-center justify-center w-full gap-6'>


                    <div className='relative'>
                        <input
                            name="email"
                            id="user--email"
                            type="text"
                            autoComplete='on'
                            required
                            minLength={6}
                            maxLength={32}
                            placeholder=" "
                            className='bg-transparent peer-focus:border-green-400 rounded-md peer appearance-none shadow-md p-4 border-[1px] border-green-100'
                        >
                        </input>
                        <label htmlFor='user--email'
                            className='absolute transform duration-300 -translate-y-8 px-2 scale-75 text-green-500 opacity-100 bg-transparent peer-focus:bg-white peer-focus:rounded-full peer-focus:opacity-100 top-4 left-2 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-black peer-placeholder-shown:opacity-20 peer-focus:text-green-500 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:px-2'>E-Mail</label>
                    </div>
                    <div className='relative'>
                        <input
                            name="password"
                            id="user--password"
                            type="password"
                            autoComplete='off'
                            required
                            minLength={6}
                            maxLength={32}
                            placeholder=" "
                            className='bg-transparent peer-focus:border-green-400 rounded-md peer appearance-none shadow-md p-4 border-[1px] border-green-100'
                        >
                        </input>
                        <label htmlFor='user--password'
                            className='absolute transform duration-300 -translate-y-8 px-2 scale-75 text-green-500 opacity-100 bg-transparent peer-focus:bg-white peer-focus:rounded-full peer-focus:opacity-100 top-4 left-2 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-black peer-placeholder-shown:opacity-20 peer-focus:text-green-500 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:px-2'>Passwort</label>
                    
                    </div>

                    <div className='flex p-4 flex-col justify-center gap-2'>
                        <button type="submit" className='rounded-lg bg-green-500 drop-shadow-md hover:bg-green-700 text-white font-bold p-4'>Login</button>
                        <Link className='text-[10px] break-words text-center hover:text-green-500' href="/pages/register"> Kein Konto? Hier registrieren!</Link>
                    </div>
                </div>
            </form>
        </div>
  )
}
