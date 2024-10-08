"use client";

import { log } from 'console';
import { redirect } from 'next/navigation';
import React from 'react'
import { IoLogOutOutline } from 'react-icons/io5';

export default function LogoutButton() {

    const logout = async () => {
        await fetch("http://localhost:3000/api/logout", {
            method: "GET"
        });
        return redirect("/pages/login");
    }
  
  return (
    <form action={logout}>
    <button type='submit' className='px-4 py-1 rounded-full bg-red-700 border-[4px] w-fit h-fit border-red-300 flex items-center justify-center text-white font-bold hover:scale-110 transition-all duration-300 hover:bg-red-500 hover:border-red-100'>
        <IoLogOutOutline className='text-white text-[2rem]'/> Ausloggen
    </button>
    </form>
  )
}
