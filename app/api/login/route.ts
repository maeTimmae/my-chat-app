"use server";

import { NextRequest, NextResponse } from 'next/server';
import * as Argon2 from "argon2";
import { lucia } from '@/app/lib/auth/lucia';
import { cookies } from 'next/headers';
import { PrismaClient } from '@prisma/client';


export async function POST( request : NextRequest ) {


        //Initialize a new Prisma Client
        const client = new PrismaClient();

        //Await submitted data in form data
        const loginCredentials = await request.formData();
        
        //The user object we want to find the matching values for
        //Assign the values from the input fields from the request
        const userToCheck = {
            email : loginCredentials.get("email")!.toString(),
            password : loginCredentials.get("password")!.toString()        
        }

        //First check the email if it exists
        const validateUser = await client.user.findUnique({
            where : { email: userToCheck.email }
        });

        //If theres no user for the given email, return a new next response
        if(validateUser == null) {
            return NextResponse.json({message:"Falsche E-Mail"})
        }

        //If an email is found, check the password if the password
        //from the input matches the hashed password stored in the database
        const passwordCheck = Argon2.verify(
            validateUser!.hashedPassword.toString(), 
            userToCheck.password
        );

        //If the check fails, return a next response as well
        if(!passwordCheck){
            return NextResponse.json({message:"Falsches Passwort!"})
        }

        //If all the checks have completed and have succesfully been checked
        //create a new session and a sessionCookie

        //Lucia Session takes a userid and an empty object
        const session = await lucia.createSession(validateUser.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        
        //Set the values from the session into the cookie
        cookies().set(
            sessionCookie.name, 
            sessionCookie.value, 
            sessionCookie.attributes
        );
    
       return NextResponse.json({status:200});
}


