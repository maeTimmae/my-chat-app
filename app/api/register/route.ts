import { sql} from "@vercel/postgres";
import { NextResponse } from 'next/server';

import * as argon2 from "argon2";
import { UserOnRegister } from "@/app/types/UserOnRegister";

export async function POST( request: Request ) {

        try {
            
            //Await the user data
            const res = await request.formData();

            const password = res.get("password")?.toString();
            const hash = await argon2.hash(`${password}`);
            
            //Store user data in an object
            //Specify type later
            const userData : UserOnRegister= {
                firstName : res.get("firstname"),
                lastName : res.get("lastname"),
                email : res.get("email"),
                password : hash
            }

            const userResult = await sql`SELECT *  FROM users WHERE email = ${userData.email?.toString()}`;

            console.log(userResult.rowCount);

            if(userResult.rowCount != 0){
                return NextResponse.json({status : 405, message : "User existiert bereits!"})
            } else {
                
                 await sql`INSERT INTO users (first_name, last_name, email, password) VALUES (
                    ${userData.firstName?.toString()},
                    ${userData.lastName?.toString()},
                    ${userData.email?.toString()},
                    ${userData.password?.toString()})`;
                
                return NextResponse.json({status:200, message : "Registrierung erfolgreich!"})
                
            }            
                
        } catch (error){
            
            return NextResponse.json({error:error})    
        
        }
    
    }
 
