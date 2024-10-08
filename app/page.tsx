import Image from "next/image";
import LoginMask from "./components/LoginMask";
import RegisterMask from "./components/RegisterMask";

import Link from "next/link";
import WillkommensBanner from "./components/WillkommensBanner";

export default function Home() {
  return (
    <main className="w-full mx-auto flex flex-col mt-5 gap-5">
      <div className="container mx-auto h-screen flex flex-row justify-between gap-5">
      <Image src={"/sm-everyone.png"} height={0} width={900} alt="" />
      <RegisterMask />
      </div>
      <WillkommensBanner />
    </main>
  );
}
