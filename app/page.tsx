import Image from "next/image";
import LoginMask from "./components/LoginMask";
import RegisterMask from "./components/RegisterMask";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[90vh] w-[90vw] bg-opacity-75 bg-green-900 backdrop-blur-md rounded-xl text-white grid grid-cols-2 justify-items-center place-items-center shadow-md shadow-[#3e3e3e]">
        <Link href="/" className='flex flex-row items-center *:text-[25px] self-start absolute z-10 drop-shadow-md'>
            <img className='drop-shadow-md' src="/leaf.png" width={100} height={0} alt="Greenchat Logo"/>
            <span className='text-green-500 drop-shadow-sm'>Spring</span>
            <span className='text-white drop-shadow-sm'>Chat</span>
        </Link>
      <div><LoginMask></LoginMask></div>
      <div><RegisterMask></RegisterMask></div>
    </div>
  );
}
