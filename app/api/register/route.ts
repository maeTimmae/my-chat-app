import { generateId } from "lucia";
import * as Argon2 from "argon2";
import { UserOnRegister } from "@/app/types/UserOnRegister";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";


export async function POST( 
    request: NextRequest , 
    response : NextResponse
) : Promise <NextResponse | undefined> { 


                //Await the submitted data from user
                const res = await request.formData();

                //Make an if-clause for checking if the formdata is null
                //If so immediately send a NextResponse with 404 Statuscode
                if( res == null ){
                    return NextResponse.json({
                        status:404,
                        message: "Formdata not found"
                    });

                } else {

                //Hash the password for safe storage    
                const hash = await Argon2.hash(`${res.get("password")!.toString()}`);
                
                const user = {
                    firstName : res.get("firstname")!,
                    lastName : res.get("lastname")!,
                    email : res.get("email")!,
                    password : hash
                }
                
                const userResult = await prisma.user.findUnique({
                    where : { email : user.email.toString() },
                });

                    //Make a second if clause and check, if the user who wants to register
                    //already exists
                    if( userResult != null ){
                        
                        return NextResponse.json({
                            status : 405, 
                            message : "User existiert bereits!"
                        });
                    
                    } else {

                        const userid = generateId(15);

                        await prisma.user.create({
                            data:{
                                id : userid,
                                email : user.email.toString(),
                                firstName :user.firstName.toString(),
                                lastName : user.lastName.toString(),
                                hashedPassword : user.password
                            }
                        })

                        return NextResponse.json({
                            status:200, 
                            message:"Registrierung erfolgreich!"
                        });

                    }
            
                }
        

}
 
