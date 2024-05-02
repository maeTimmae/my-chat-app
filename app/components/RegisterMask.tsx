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
                        console.log("RESPONSE: " + response.message);
                        response.status === 200 && <span className=''></span>
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
        <div className={`${urbanist.className} text-center`}>
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
                
                    <div className='flex flex-row justify-center gap-2'>
                        <button type="submit" className='rounded-lg w-1/2 bg-green-500 drop-shadow-md hover:bg-green-700 text-white p-4'>Registrieren</button>
                        <Link className='text-[10px] break-words text-justify hover:text-green-500' href="/pages/login"> Schon registriert? Hier gehts zum Login!</Link>
                    </div>
                
                </div>

            </form>

            {

                isLoading && <div className=''>Hallo</div>

            }
        </div>
    )
}
