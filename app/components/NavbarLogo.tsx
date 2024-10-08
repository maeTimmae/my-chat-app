import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function NavbarLogo() {
    return (
    <div className='inline-flex items-center align-middle'>
        <Link href="/">
            <Image src={"/leaf.png"} height={0} width={100} alt="Navbar-Logo"/>
        </Link>
        <span className='text-green-700 font-extrabold text-[2rem]'>Spring</span>
        <span className='text-white drop-shadow-md font-extrabold text-[2rem]'>Chat</span>
    </div>
  )
}
