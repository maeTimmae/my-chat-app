import Link from 'next/link';
import React from 'react';
import Image from "next/image"

export default function Navbar(){
 return (
    <nav className='container mx-auto p-4 flex flex-col md:flex-row justify-between border-b-[1px] border-b-green-100'>
        
            <Link href="/" className='flex flex-row items-center *:text-[25px]'>
            <Image className='drop-shadow-md' src="/leaf.png" width={100} height={0} alt="Greenchat Logo"/>
            <span className='text-green-500 drop-shadow-sm'>Spring</span>
            <span className='text-green-900 drop-shadow-sm'>Chat</span>
            </Link>

        {/* Mid Section */}
        <div className='flex flex-row w-1/3 justify-between items-center *:uppercase *:tracking-wide'>
            <Link className='hover:text-green-500 transition-colors' href="/pages/login">Login</Link>
            <Link className='hover:text-green-500 transition-colors' href="/pages/register">Registrieren</Link>
        </div>
    </nav>
 )
}