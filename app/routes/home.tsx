import { Link } from "react-router";
import type { Route } from "./+types/home";
import { TbArrowBigLeftLines } from "react-icons/tb";
import { FaAnglesDown } from "react-icons/fa6";
import Category from "~/components/form/common/Category";
import Card from "~/components/form/common/Card";
import Timer from "~/components/form/common/Timer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "خانه" },
    {
      name: "description",
      content:
        "در سریع ترین زمان ممکن محصولات مورد نیاز خود را از بین بهترین محصولات انتخاب کنید و خریدی لذت بخش را همراه با جوایز متنوع تجربه کنید.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <header className="w-screen h-screen  lg:max-h-[900px] bg-gray-2 flex flex-col items-center justify-center gap-5 pt-15 sm:pt-10 lg:pt-40 rounded-b-4xl  relative">
        <h1 className="text-black text-2xl sm:text-3xl font-bold">
          سفرت رو بچین، <span className="text-primary">وسایلش</span> رو داریم!
        </h1>
        <Link
          to="products"
          className="w-45 h-10 flex py-5  pulse-anima font-vazir-thin items-center justify-center gap-2 bg-dark-blue rounded-3xl  shadow shadow-gray-1 hover:scale-105 duration-200"
        >
          مشاهده محصولات
          <TbArrowBigLeftLines />
        </Link>
        <div className="md:w-3/4 lg:w-3/5 relative">
          <img
            src="/images/catoon.png"
            alt="image"
            className="w-full  object-contain  mix-blend-multiply"
            onContextMenu={(e: any) => e.preventDefault()}
          />
          <img
            src="/images/line2.png"
            alt=""
            className="  absolute -left-70 top-[40%] z-1000"
          />
          <img
            src="/images/line3.png"
            alt=""
            className="hidden lg:block absolute -right-70 top-[0] z-1000"
          />
        </div>
        <div className="w-46 h-14 flex items-center justify-around  font-bold rounded-3xl text-black absolute bg-white top-[80%] md:top-[72%] lg:top-[55%]  right-10 md:right-20 lg:right-50 translate-y-[-50%]  z-1 before:content[''] before:absolute before:bg-orange-400 before:right-0 overflow-hidden before:w-2 before:opacity-70 before:h-10 before:rounded-3xl">
          <span className="text-orange-400 text-2xl ">+200 </span>
          محصول متنوع
        </div>
        <div className="w-46 h-14 flex items-center justify-around  font-bold rounded-3xl text-black absolute bg-white top-[88%] md:top-[24%] lg:top-[60%]  left-10 md:left-20 lg:left-40 translate-y-[-50%]  z-1 before:content[''] before:absolute before:bg-green-500 before:right-0 overflow-hidden before:w-2 before:opacity-70 before:h-10 before:rounded-3xl">
          <span className="text-green-500 text-2xl ">+999 </span>
          مشتری راضی
        </div>
      </header>
      <main className="w-full min-h-100 flex flex-col gap-10 py-4 mt-10 sm:mt-0 lg:mt-10 px-2 ">
        <section className="w-full h-30  sm:w-[90%] lg:w-200 sm:h-40 mx-auto  bg-primary overflow-y-visible rounded-3xl flex  items-center py-5 flex-col relative  ">
          <div className="absolute -top-4 left-[50%] translate-x-[-50%] bg-primary w-15 h-5   rounded-2xl rounded-b-none"></div>
          <h2 className=" text-2xl sm:text-2xl">دسته بندی محصولات</h2>
          <ul className="w-full flex  items-center px-2 lg:px-10 justify-around  absolute  -bottom-20  left-0">
            <Category
              target={`categories/${"flashlights"}`}
              title="چراغ قوه"
              image="/images/black-flashlight-isolated-white_1218049-6825 1.png"
              size="w-2/8 h-30 sm:w-37 sm:h-37"
              bg="bg-white"
            />
            <Category
              target={`categories/${"sleep"}`}
              title="تشک"
              image="/images/sleep.png"
              size="w-2/8 h-30 sm:w-37 sm:h-37"
              bg="bg-white"
            />
            <Category
              target={`categories/${"flask"}`}
              title="بطری"
              image="/images/bottle.png"
              size="w-2/8 h-30 sm:w-37 sm:h-37"
              bg="bg-white"
            />
            <Category
              target={`categories/${"chair"}`}
              title="صندلی"
              image="/images/chair.png"
              size="hidden sm:flex w-2/8 h-30 sm:w-37 sm:h-37"
              bg="bg-white"
            />
          </ul>
        </section>
        <section className="mx-auto w-3/5 text-center mt-25 mb-10">
          <p className="text-black">
            "تجهیزات حرفه ای، ماجوراجویی های فراموش نشدنی!" باور داریم که هر سفر
            به طبیعت می تونه به تجربه منحصر به فرد و خاطره انگیز تبدیل بشه. به
            همین دلیل بهترین و با کیفیت ترین لوازم کمپینگ و سفر رو برای شما
            فراهم کردیم. از چادرهای سبک و کم جحم تا وسایل آشپزی و روشنایی، همه
            چی آماده هست تا شما بدون نگرانی به دل طبیعت بزنید.
          </p>
        </section>

        <section className="mb-30 mx-auto flex flex-col gap-4 md:flex-row   items-center justify-around px-5 py-4 w-full lg:w-250 min-h-75 rounded-3xl relative  bg-secondary">
          <div className="w-45 lg:w-55 h-70 rounded-4xl flex flex-col items-center relative overflow-hidden justify-around py-2 px-3   bg-primary ">
            <h1 className="font-bold text-3xl">
              محصولات <br /> تخفیف دار
            </h1>
            <Timer />
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Card
              title="فلاسک"
              image="/images/chair.png"
              target={"flask"}
              price="20000"
              prePrice="30000"
              offer="40"
            />
            <Card
              title="فلاسک"
              image="/images/chair.png"
              target={"flask"}
              price="30000"
              prePrice="40000"
              offer="20"
            />
            <Card
              title="فلاسک"
              image="/images/bottle.png"
              target={"flask"}
              price="10000"
              prePrice="50000"
              offer="80"
            />
          </div>
        </section>
      </main>
    </>
  );
}
