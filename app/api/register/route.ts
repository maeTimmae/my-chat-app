import { User } from '@/app/@types/User';
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

export async function POST(request: NextRequest, response : NextResponse) {
    try {
        const user  = await request.body;
        console.log(user);
        if(user != null){
            return NextResponse.json({user:user},{status:200})
        } else {
            return NextResponse.json({message:"User ist leer"},{status:405});
        }
        
    } catch (err){
        return NextResponse.json({error:err}, {status:500});
    }
} 
