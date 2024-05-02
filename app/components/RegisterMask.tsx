"use client";

import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import React, { FormEvent } from 'react'
import { useState } from 'react'



export default function RegisterMask() {
  
    //Setup Formdata to capsule user input in Object
    const userFormData = new FormData();

    const [ firstName , setFirstName ] = useState<string>("");
    const [ lastName , setLastName ] = useState<string>("");
    const [ email , setEmail ] = useState<string>("");
    const [ password , setPassword ] = useState<string>("");

    userFormData.append("firstName", firstName);
    userFormData.append("lastName", lastName);
    userFormData.append("email", email);
    userFormData.append("password", password);

    const submitUserFormData = async (event: FormEvent<HTMLFormElement>, userData : FormData) => {
        event.preventDefault
        fetch("/api/register", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            console.log(response.json());
            return response.json();
        })
        .then(response => {
            console.log("RESPONSE: "+response.status);
            response.status === 200 && <span className=''></span>
            }
        );
    }

  
    return (
    // Wrapper Div for form
    <div className=''>
        <form method='POST' action={""} onSubmit={
            (event) => {
                submitUserFormData(event,userFormData);
            }}>
            <label htmlFor='user--firstname'>Vorname</label>
            <input 
            name="firstname"
            id="user--firstname"
            type="text" 
            autoComplete='on'
            required
            placeholder='Bitte Vornamen eingeben' 
            >
            </input>
        </form>
    </div>
  )
}
