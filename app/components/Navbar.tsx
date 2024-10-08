import Link from 'next/link';
import React from 'react';
import { getAuth } from '../lib/auth/auth';
import NavbarLogo from './NavbarLogo';
import LogoutButton from './LogoutButton';


{/* Make the navbar asyncronous so that it adapats to the current state of user */ }
/**
 * Navbar Component for SpringChat app
 * @returns {component} The Navbar component that changes its appearance depending on user state
 */
export default async function Navbar() {

    const user = await getAuth();

    if (!user.session) {

        return (
            <nav className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-b-[1px] backdrop-blur-xl border-b-green-100'>

                <NavbarLogo></NavbarLogo>

                <Link href="/pages/login" className='px-4 py-1 rounded-full bg-green-700 border-[4px] w-fit h-fit border-green-300 flex items-center justify-center text-white font-bold hover:scale-110 transition-all duration-300 hover:bg-green-500 hover:border-green-100'> Einloggen </Link>

            </nav>
        )

    } else {

        const userCredentials = await fetch("http://localhost:3000/api/usercredentials", {
            method: "POST",
            body: JSON.stringify(user.user.email)
          }
          ).then(res => res.json())
        
          console.log(userCredentials);
          const firstLetter = userCredentials.firstName.substring(0,1);
        
        return (
            <nav className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-b-[1px] backdrop-blur-xl border-b-green-100'>

                <NavbarLogo></NavbarLogo>

                <span>Willkommen, {userCredentials.firstName} {userCredentials.lastName}</span>

                <LogoutButton />

            </nav>
        )
    }
}