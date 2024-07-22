import Link from 'next/link';
import React from 'react';
import Image, { getImageProps } from "next/image"
import { getAuth } from '../lib/auth/auth';
import NavbarButtons from './NavbarButtons';


{/* Make the navbar asyncronous so that it adapats to the current state of user */}
/**
 * Navbar Component for SpringChat app
 * @returns {component} The Navbar component that changes its appearance depending on user state
 */
export default async function Navbar(){

 const user = await getAuth();
        
 return (
    <nav className='container mx-auto px-4 flex flex-col md:flex-row justify-between border-b-[1px] backdrop-blur-xl border-b-green-100'>
        
            <Link href="/" className='flex flex-row items-center *:text-[25px]'>
            <Image className='drop-shadow-md' src="/leaf.png" width={100} height={0} alt="Greenchat Logo"/>
            <span className='text-green-500 drop-shadow-sm'>Spring</span>
            <span className='text-green-900 drop-shadow-sm'>Chat</span>
            </Link>

        {/* Mid Section */}
        <ul className='flex flex-row w-1/3 justify-end gap-3 items-center *:uppercase *:tracking-wide'>
            <NavbarButtons session={user.session} user={user.user}></NavbarButtons>
        </ul>

    </nav>
 )
}