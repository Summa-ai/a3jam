import Image from "next/image";
import Link from "next/link";

export default function Bottom() {
  return (
    <>
      <div className="h-[67px]" />
      <div className="lg:h-[312px] h-auto bg-[#F3F4F6] flex flex-col lg:flex-row-reverse lg:justify-between lg:items-start items-center lg:p-5">
        <div className="flex flex-col items-start justify-start" dir="rtl">
          <Image src="/logo.png" width={80} height={80} alt="LOGO" />
          <div className="flex flex-row">
            <Image src="/whatsapp.png" width={20} height={20} alt="LOGO" />
            <p>واتساب: </p>
            <p dir="ltr">+966550289800</p>
          </div>
          <div className="h-3" />
          <div className="flex flex-row justify-start items-start">
            <Image
              src="/ksa.png"
              width={20}
              height={20}
              alt="LOGO"
              className="object-contain"
            />
            <div className="flex flex-col">
              <p>الرياض، طريق الملك عبدالله</p>
              <p>المملكة العربية السعودية</p>
            </div>
          </div>
          <div className="h-3" />
          <Link href="https://linktr.ee/SummaTeam">
            <Image
              src="/social.png"
              width={200}
              height={200}
              alt="LOGO"
              className="object-contain"
            />
          </Link>
        </div>
        <div className="h-7 lg:h-0" />
        <div
          className="flex flex-col justify-center items-center lg:justify-start lg:items-start"
          dir="rtl"
        >
          <p className="font-bold text-lg">المزيد</p>
          <Link href="https://linktr.ee/SummaTeam">تواصل معنا</Link>
        </div>
        <div className="h-7 lg:h-0" />
        <div
          className="flex flex-col justify-center items-center lg:justify-start lg:items-start"
          dir="rtl"
        >
          <p className="font-extrabold text-lg">الأسئلة الشائعة</p>
          <Link href="/about">عن أعجم</Link>
          <Link href="/corrector">التجربة المجانية</Link>
        </div>

        <div className="h-7 lg:h-0" />
        <div
          className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-2"
          dir="rtl"
        >
          <p className="font-extrabold text-lg">تطبيق أعجم</p>
          <Link href="https://play.google.com/store/games?hl=ar&gl=US">
            <Image
              src="/application.png"
              width={90}
              height={90}
              alt="LOGO"
              className="object-contain"
            />
          </Link>
        </div>
        <div className="h-9 lg:h-0" />
        <Link href="https://github.com/Summa-ai/a3jam">
          <Image
            src="/github.png"
            width={30}
            height={30}
            alt="LOGO"
            className="object-contain"
          />
        </Link>
        <div className="h-9 lg:h-0" />

        <div className=""> جميع الحقوق مفتوحة المصدر من فريق أعجم 2023 </div>
        <div className="h-9 lg:h-0" />
      </div>
    </>
  );
}
