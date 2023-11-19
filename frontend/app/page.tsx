import Image from "next/image";
import Link from "next/link";
import AppBar from "../shared/appBar";
import Bottom from "../shared/bottomBar";

export default function Home() {
  return (
    <div className="relative w-screen flex flex-col">
      <AppBar />
      <div className="absolute z-[-1] top-[100px] right-0">
        <Image src="/background_shadow.png" alt="" width={551} height={100} />
      </div>
      <div
        className="grid grid-rows-1 md:grid-cols-2 grid-cols-1 justify-items-center"
        dir="rtl"
      >
        <div className="flex flex-col justify-center items-center text-text">
          <Image src="/logo.png" width={150} height={150} alt="LOGO" />
          <p>هو مدقق ومعرب لغوي آلي، يُلهمك لتصوغ</p>
          <p>نصوصك بأسلوب خالٍ من العيوب الإملائية،</p>
          <p>ويمنحك فهمًا متقنًا لإعراب الجمل ومعنى </p>
          <p>الكلام بمختلف السياق .</p>
          <div className="h-5" />
          <Link
            href="/corrector"
            className="bg-[#009CA2] border-[1px] border-[#008677] shadow-lg text-white py-2 px-3 rounded-md z-50 font-zarid"
          >
            جرب أعجم الآن - التجربة المجانية
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
        <p className="font-zarid text-primaryLight text-3xl">مزايا أعجم</p>
        <div className="h-[16px]" />
        <p>يدعم أعجم 6 مستهدفات برمجان اللغة العربية 2023</p>
      </div>
      <div className="h-[54px]" />

      <div
        className="grid grid-flow-dense grid-rows-2 grid-cols-1 lg:grid-rows-2 lg:grid-cols-11 gap-10  w-full place-items-center px-10 "
        dir="rtl"
      >
        <div className="w-[373px] lg:w-full lg:col-span-4 bg-white shadow-2xl h-[170px] rounded-lg flex flex-col justify-center items-center p-5 gap-2">
          <Image
            src="/detect.png"
            alt=""
            width={90}
            height={120}
            className="object-contain"
          />
          <p className="font-black text-lg">
            كشف معاني الكلمات بناء على سياق الجملة
          </p>
          <p>معنى الكلام يتغير معا تغير السياق</p>
        </div>
        <div className="w-[373px] lg:w-full lg:col-span-3 bg-white shadow-2xl h-[170px] rounded-lg flex flex-col justify-center items-center p-5 gap-2">
          <Image
            src="/a2z.png"
            alt=""
            width={90}
            height={120}
            className="object-contain"
          />
          <p className="font-black text-lg">تعريب الكلمات من أ إلى ي</p>
          <p>أعجم قدها بإمكانه تعريب النصوص</p>
        </div>
        <div className="w-[373px] lg:w-full lg:col-span-4 bg-white shadow-2xl h-[170px] rounded-lg flex flex-col justify-center items-center p-5 gap-2">
          <Image
            src="/brain.png"
            alt=""
            width={90}
            height={120}
            className="object-contain"
          />
          <p className="font-black text-lg">تطوير المنصة بالذكاء الإصطناعي</p>
          <p>اعجم مزود بأحدث تقنيات الذكاء الإصطناعي</p>
        </div>

        <div className="w-[373px] lg:w-full lg:col-span-3 bg-white shadow-2xl h-[170px] rounded-lg flex flex-col justify-center items-center p-5 gap-2">
          <Image
            src="/Untitled 5.png"
            alt=""
            width={90}
            height={120}
            className="object-contain"
          />
          <p className="font-black text-lg">المصحح الإملائي الذكي</p>
          <p>أعجم مصحح و معلم في نفس الوقت</p>
        </div>
        <div className="w-[373px]  lg:w-full lg:col-span-5 bg-white shadow-2xl h-[170px] rounded-lg flex flex-col justify-center items-center p-5 gap-2">
          <Image
            src="/Untitled 7.png"
            alt=""
            width={50}
            height={90}
            className="object-contain"
          />
          <p className="font-black text-sm lg:text-lg" dir="rtl">
            اداة لمشاركة المختصين في إثراء بيانات المعجم (Crowdsourcing)
          </p>
          <p className="text-sm lg:text-base">
            أعجم يجمع الكلمات في قواعد بيانات ومن ثم يرسلها إلى المختصين
          </p>
        </div>
        <div className="w-[373px]  lg:w-full lg:col-span-3 bg-white shadow-2xl h-[170px] rounded-lg flex flex-col justify-center items-center p-5 gap-2">
          <Image
            src="/Untitled 6.png"
            alt=""
            width={90}
            height={120}
            className="object-contain"
          />
          <p className="font-black text-lg">يدعم مختلف أنواع الملفات</p>
          <p dir="rtl">أعجم بإمكانه فهم (dox,pdf,txt,...)</p>
        </div>
      </div>
      <Bottom />
    </div>
  );
}
