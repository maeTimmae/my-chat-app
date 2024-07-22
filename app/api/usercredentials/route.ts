import { getAuth } from "@/app/lib/auth/auth";
import prisma from "@/app/modules/prismaclient";
import { ok } from "assert";
import { NextRequest, NextResponse } from "next/server";

export async function POST( req : NextRequest ){

    const userId =  await req.json();
    
    const foundUser = await prisma.user.findUnique({ where : {
            email : userId.toString()
        }
    });


    return NextResponse.json(
        {firstName : foundUser?.firstName,
         lastName : foundUser?.lastName,
         email : foundUser?.email
        }
    )

    
}