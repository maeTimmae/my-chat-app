import RegisterMask from "@/app/components/RegisterMask";
import Image from "next/image";
import React from "react";

export default function RegisterPage() {
    return (
        <main className="grid grid-cols-1 p-2 md:p-0 md:grid-cols-2 place-items-center justify-items-center mt-2 container mx-auto">

            <div className="col-auto">
                <p className="text-[30px] text-justify"> Vernetze dich mit mit deinen Freunden oder schließe neue Freundschaften!</p>
                <p className="text-center *:text-[30px] mb-10">
                    <span className='text-green-500 drop-shadow-sm'>Spring</span>
                    <span className='text-green-900 drop-shadow-sm'>Chat</span>
                </p>
                <Image className="h-[100%] w-[100%]" src="/sm-everyone.png" width={400} height={0} alt="Soziales Netzwerk"></Image>
            </div>
            <div className="col-auto">
                <RegisterMask></RegisterMask>
            </div>
        </main>
    )
}