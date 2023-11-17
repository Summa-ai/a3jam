import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "../public/menu";
import Bottom from "../shared/bottomBar";

export default function Home() {
  return (
    <div className="relative w-screen flex flex-col">
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
      <div className="absolute z-[-1] top-[100px]  right-0">
        <Image src="/background_shadow.png" alt="" width={551} height={100} />
      </div>
      <div
        className="grid grid-rows-1 md:grid-cols-2 grid-cols-1 justify-items-center"
        dir="rtl"
      >
        <div className="flex flex-col justify-center items-center text-text">
          <Image src="/logo.png" width={150} height={150} alt="LOGO" />
          <p>هو مدقق ومعرب لغوي آلي، يُلهمك لتصوغ نصوصك بأسلوب خالٍ</p>
          <p>من العيوب الإملائية، ويمنحك فهمًا متقنًا لإعراب الجمل من خلال</p>
          <p>ربط سهل ومبتكر للمعجم.</p>
          <div className="h-5"></div>
          <Link
            href="/corrector"
            className="bg-primaryLight text-white py-2 px-3 rounded-md z-50 font-rtl"
          >
            جرب أعجم الآن - مجاناً
          </Link>
        </div>
        <div className="flex justify-center items-center w-screen pt-7">
          <Image
            src="/section1.png"
            alt=""
            width={700}
            height={90}
            className=" object-fill"
          />
        </div>
      </div>
      <div className="h-5" />
      <div
        className="flex flex-col justify-center items-center text-text"
        dir="rtl"
      >
        <p className="font-rtl text-primaryLight text-3xl">يدقق لك اينما كنت</p>
        <div className="h-[16px]" />
        <p>
          لم يعد تصحيح القواعد أو تصحيح الإملاء أو معرفة الإعراب مشكلة بعد الآن!
        </p>
        <p>اعجم معك أينما كنت تكتب، سواء في تطبيقات سطح المكتب، أو مواقع</p>
        <p>
          الويب، أو أثناء تصفّحك لوسائل التواصل الاجتماعي، أو حتى خلال كتابة
          رسائلك.
        </p>
      </div>
      <div className="h-[54px]" />
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-4 gap-10 gap-x-10 w-full place-items-center px-10 z-50">
        <div className="w-full lg:max-w-[30rem] max-w-[20rem] h-[164px] shadow-lg rounded-lg flex flex-col justify-center items-center gap-5 bg-white">
          <p>التواصل الإجتماعي</p>
          <Image
            src="/social.png"
            alt=""
            width={500}
            height={90}
            className=" object-fill"
          />
        </div>
        <div className="w-full lg:max-w-[30rem] max-w-[20rem] h-[164px] shadow-lg rounded-lg flex flex-col justify-center items-center gap-5 bg-white">
          <p>المراسلات و البريد الإلكتروني</p>
          <Image
            src="/emails.png"
            alt=""
            width={600}
            height={90}
            className=" object-fill"
          />
        </div>
        <div className="w-full lg:max-w-[30rem] max-w-[20rem] h-[164px] shadow-lg rounded-lg flex flex-col justify-center items-center gap-5 bg-white">
          <p>المتصفحات</p>
          <Image
            src="/browsers.png"
            alt=""
            width={700}
            height={90}
            className=" object-fill"
          />
        </div>
        <div className="w-full lg:max-w-[30rem] max-w-[20rem] h-[164px] shadow-lg rounded-lg flex flex-col justify-center items-center gap-5 bg-white">
          <p>المستندات والترجمة</p>
          <Image
            src="/documents.png"
            alt=""
            width={700}
            height={90}
            className=" object-fill"
          />
        </div>
      </div>
      <Bottom />
    </div>
  );
}
