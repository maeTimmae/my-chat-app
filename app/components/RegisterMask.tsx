"use client";

import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import React, { FormEvent } from 'react'
import { useState } from 'react'

import { Urbanist } from 'next/font/google';
import Link from 'next/link';

const urbanist = Urbanist({
    subsets: ["latin"],
})

export default function RegisterMask() {

    //Setup Formdata to capsule user input in Object
    const userFormData = new FormData();

    //Handle user input and att it to formdata
    const [firstName, setFirstName] = useState<FormDataEntryValue>("");
    const [lastName, setLastName] = useState<FormDataEntryValue>("");
    const [email, setEmail] = useState<FormDataEntryValue>("");
    const [password, setPassword] = useState<FormDataEntryValue>("");

    const [isLoading, setIsLoading] = useState<boolean>(false);

    userFormData.append("firstName", firstName);
    userFormData.append("lastName", lastName);
    userFormData.append("email", email);
    userFormData.append("password", password);

    const submitUserFormData = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        //Show spinner as long as response is not here
        setIsLoading(true);

        try {
            fetch("/api/register", {
                method: "POST",
                body: userFormData,
            })
            .then(response => response.json()
            .then(response => {
                        
                response.ok &&  
                    <span className='success'>Registrierung erfolgreich</span>

            }
            ));
        
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        // Wrapper Div for form
        <div className={`${urbanist.className} text-center rounded-xl w-[500px] shadow-md shadow-green-200 p-4`}>
            <h1 className='mb-10 text-[30px] font-bold'>Registrieren</h1>
            <div className='mb-10'>Werde Teil der <span className='text-green-500'>Spring</span><span className='text-green-900'>Chat</span>-Community! </div>
            <form method='POST' action={""} onSubmit={submitUserFormData}>
                <div className='flex flex-col items-center justify-center w-full gap-6'>
                    
                    <div className='relative'>
                        <input
                            name="firstname"
                            id="user--firstname"
                            type="text"
                            autoComplete='on'
                            required
                            onChange={e => setFirstName(e.target.value)}
                            minLength={6}
                            maxLength={32}
                            className='bg-transparent peer-focus:border-green-400 rounded-md peer appearance-none shadow-md p-4 border-[1px] border-green-100  '
                        >
                        </input>
                        <label htmlFor='user--firstname'
                            className='absolute transform duration-300 peer-focus:-translate-y-9 peer-focus:scale-75 peer-focus:p-1 peer-focus:text-green-500 peer-focus:bg-white opacity-20 peer-focus:opacity-100 top-4 left-2'>
                            Vorname
                        </label>
                    </div>
                    
                    <div className='relative'>
                        <input
                            name="lastname"
                            id="user--lastname"
                            type="text"
                            autoComplete='on'
                            required
                            onChange={e => setLastName(e.target.value)}
                            minLength={6}
                            maxLength={32}
                            className='bg-transparent peer-focus:border-green-400 rounded-md peer appearance-none shadow-md p-4 border-[1px] border-green-100'
                        >
                        </input>
                        <label htmlFor='user--firstname'
                            className='absolute transform duration-300 peer-focus:-translate-y-9 peer-focus:scale-75 peer-focus:p-1 peer-focus:text-green-500 peer-focus:bg-white opacity-20 peer-focus:opacity-100 top-4 left-2'>
                            Nachname
                        </label>
                    </div>

                    <div className='relative'>
                        <input
                            name="lastname"
                            id="user--lastname"
                            type="text"
                            autoComplete='on'
                            required
                            onChange={e => setEmail(e.target.value)}
                            minLength={6}
                            maxLength={32}
                            className='bg-transparent peer-focus:border-green-400 rounded-md peer appearance-none shadow-md p-4 border-[1px] border-green-100'
                        >
                        </input>
                        <label htmlFor='user--firstname'
                            className='absolute transform duration-300 peer-focus:-translate-y-9 peer-focus:scale-75 peer-focus:p-1 peer-focus:text-green-500 peer-focus:bg-white opacity-20 peer-focus:opacity-100 top-4 left-2'>E-Mail</label>
                    </div>
                    <div className='relative'>
                        <input
                            name="lastname"
                            id="user--lastname"
                            type="password"
                            autoComplete='off'
                            required
                            onChange={e => setPassword(e.target.value)}
                            minLength={6}
                            maxLength={32}
                            className='bg-transparent peer-focus:border-green-400 rounded-md peer appearance-none shadow-md p-4 border-[1px] border-green-100'
                        >
                        </input>
                        <label htmlFor='user--firstname'
                            className='absolute transform duration-300 peer-focus:-translate-y-9 peer-focus:scale-75 peer-focus:p-1 peer-focus:text-green-500 peer-focus:bg-white opacity-20 peer-focus:opacity-100 top-4 left-2'>Passwort</label>
                    
                    </div>

                    <div className='flex p-4 flex-col justify-center gap-2'>
                        <button type="submit" className='rounded-lg bg-green-500 drop-shadow-md hover:bg-green-700 text-white p-4'>Registrieren</button>
                        <Link className='text-[10px] break-words text-center hover:text-green-500' href="/pages/login"> Schon registriert? Hier gehts zum Login!</Link>
                    </div>
                
                </div>

            </form>

            {
                isLoading &&     
                <button className='inline-flex bg-slate-500 p-4 rounded-lg text-white font-bold' type='button' disabled>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>   
                    Bearbeite...
                </button>
            }
        </div>
    )
}
