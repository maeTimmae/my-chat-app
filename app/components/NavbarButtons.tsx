"use client";

import React, { FormEvent } from 'react'
import { getAuth } from '../lib/auth/auth'
import { Session, User } from 'lucia';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { VscSignOut } from 'react-icons/vsc';
import { RiAccountBoxLine, RiAccountCircleLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

type UserObject = {
  session: Session | null,
  user: User | null
}

export default function NavbarButtons(userObject: UserObject) {

  async function signOut(event: FormEvent) {
    event.preventDefault();
    try {
      await fetch("/api/logout", {
        method: "POST",
        body: JSON.stringify(userObject.session?.id)
      })
    } catch (err) {
      console.log(err);
    }
  }


  return (
    userObject.session != null ?
      <IconContext.Provider value={{ size: "1.7em", className:""}}>
        <Link href="/account/settings" title="Mein Account">
          <RiAccountCircleLine></RiAccountCircleLine>
        </Link>
        <button className='self-center' onClick={signOut} title="Ausloggen">
          <RiLogoutBoxRLine />
        </button>
      </IconContext.Provider>
      :
      <>
        <Link href="/pages/login">Login</Link>
        <Link href="/pages/register"> Registrieren</Link>
      </>
  )
}
