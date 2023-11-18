import Image from "next/image";
import Link from "next/link";

export default function AppBar() {
  return (
    <>
      <div className="absolute z-[-1] h-[100px] w-screen">
        <Image src="/header.png" alt="" fill className="object-fill" />
      </div>
      <div className="flex flex-row w-screen justify-between items-center px-5 py-2">
        <Image
          src="/arabic_hakathon.png"
          alt=""
          width={70}
          height={100}
          className="object-fill"
          sizes="20vw"
        />
        <div className="w-full bg-[#004D54] lg:max-w-lg max-w-xs h-[50px] mx-2 lg:mx-5 rounded-full flex flex-row-reverse lg:justify-center justify-between lg:px-0 px-8 items-center gap-5 font-rtl md:text-xs lg:text-lg text-white">
          <Link href="/" className="">
            الرئيسية
          </Link>
          <div className="w-[3px] rounded-full h-10 bg-white" />
          <Link href="/corrector" className="">
            أعجم
          </Link>
          <div className="w-[3px] rounded-full h-10 bg-white lg:block hidden" />
          <Link href="/about" className="lg:block hidden">
            عن أعجم
          </Link>
          <div className="w-[3px] rounded-full h-10 bg-white lg:block hidden" />
          <Link href="https://linktr.ee/SummaTeam" className="lg:block hidden">
            تواصل معنا
          </Link>
        </div>
        <Image
          src="/header_logo.png"
          alt=""
          width={130}
          height={160}
          sizes="20vw"
          className="object-fill"
        />
      </div>
      <div className="h-10"></div>
    </>
  );
}
