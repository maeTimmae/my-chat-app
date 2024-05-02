import RegisterMask from "@/app/components/RegisterMask";
import Image from "next/image";
import React from "react";

export default function RegisterPage() {
    return (
        <main className="w-screen h-2/3 flex flex-col md:flex-row items-center justify-evenly">

            <div className="flex flex-col items-center w-1/2 text-center">
                <p className="w-[75%] text-[30px] text-justify"> Vernetze dich mit mit deinen Freunden oder schließe neue Freundschaften!</p>
                <p className="text-center w-full *:text-[30px]">
                    <span className='text-green-500 drop-shadow-sm'>Spring</span>
                    <span className='text-green-900 drop-shadow-sm'>Chat</span>
                </p>
                <Image className="w-[75%] h-[75%]" src="/sm-everyone.png" width={400} height={0} alt="Soziales Netzwerk"></Image>
            </div>
            <RegisterMask></RegisterMask>
        </main>
    )
}