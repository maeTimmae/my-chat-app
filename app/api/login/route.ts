"use server";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import * as Argon2 from "argon2";
import { lucia } from '@/app/lib/auth/lucia';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


async function login( request : NextRequest ) {
    try {

        //Await submitted data in form data
        const loginCredentials = await request.formData();
        
        const userToCheck = {
            email : loginCredentials.get("email")!.toString(),
            password : loginCredentials.get("password")!.toString()        
        }

        const validateUser = await prisma.user.findUnique({
            where : { email: userToCheck.email }
        });

        if(validateUser == null) {
            return NextResponse.json({message:"Falsche E-Mail"})
        }

        const passwordCheck = Argon2.verify(
            validateUser!.hashedPassword.toString(), 
            userToCheck.password
        );

        if(!passwordCheck){
            return NextResponse.json({message:"Falsches Passwort!"})
        }

        const session = await lucia.createSession(validateUser.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
            sessionCookie.name, 
            sessionCookie.value, 
            sessionCookie.attributes
        );

        const userPass = {
            session : session,
            cookie : cookies().getAll()
        }

        return userPass;

    } catch (err){
        return NextResponse.json({error:err})
    }
}


export async function POST(request: NextRequest) {
  
    const userPass = await login(request);

    console.log(userPass);

    if(userPass){
        //Ignore the error - id will be getting placed in
        redirect(`/pages/dashboard/id=${userPass.session.id}`);
    }

    return redirect("/pages/login");

}
