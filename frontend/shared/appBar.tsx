import Image from "next/image";
import { MenuIcon } from "../public/menu";

export default function AppBar() {
  return (
    <>
      <div className="absolute z-[-1] h-[156px] w-screen">
        <Image src="/header.png" alt="" fill className="object-fill" />
      </div>
      <div className="flex flex-row w-screen justify-between items-center px-5 py-2">
        <Image
          src="/arabic_hakathon.png"
          alt=""
          width={100}
          height={212}
          className="object-fill"
        />
        <Image
          src="/header_logo.png"
          alt=""
          width={190}
          height={212}
          className="object-fill"
        />
        <div className="text-white">{MenuIcon}</div>
      </div>
      <div className="h-10"></div>
    </>
  );
}
