"use server";

import { User } from '@/app/@types/User';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

export async function POST(request: Request, response : NextApiResponse) {
    
    //Get access to submitted formdata
    const res = await request.formData();

    if(res){
        try {

            const user : User = {
                firstName : res.get("firstName"),
                lastName : res.get("lastName"),
                email : res.get("email"),
                password : res.get("password")
            }

            return NextResponse.json({status:200, message : "Registrierung erfolgreich!"})

        } catch (error){
            
            return NextResponse.json({status : 405, message : error})
        
        }
    
    }
    //Assign values to a User Object
    //Types for the registering user Object can be found in @types->User.ts
    // const user : User = {
    //     firstName : res.get("firstName"),
    //     lastName : res.get("lastName"),
    //     email : res.get("email"),
    //     password : res.get("password")
    // }
    return NextResponse.json({status : 500, message : "Registrierung fehlgeschlagen!"})
} 
