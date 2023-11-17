export default function Bottom() {
  return (
    <>
      <div className="h-[67px]" />
      <div className="h-[167px] flex flex-col">
        <div className="grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 grid-rows-2 bg-primaryLight h-[111px] bg-gradient-to-b from-[#009DA3] to-[#017E85] place-items-center text-white font-rtl text-lg">
          <div className="">تواصل معنا</div>
          <div className="">عن اعجم</div>
          <div className="">تحميل الإضافات</div>
          <div className="">التعليمات</div>
        </div>
        <div className="h-[56px] bg-[#014E56] flex justify-center items-center text-white">
          جميع الحقوق مفتوحة المصدر من فريق أعجم 2023
        </div>
      </div>
    </>
  );
}
