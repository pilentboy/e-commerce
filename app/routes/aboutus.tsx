import MainContainer from "~/components/common/MainContainer";
import type { Route } from "./+types/aboutus";
import AboutUsSectionWrapper from "~/components/other/AboutUsSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "درباره ما" },
    {
      name: "description",
      content: "درباره ما",
    },
  ];
}

export default function AboutUs() {
  return (
    <MainContainer>
      <AboutUsSectionWrapper customStyle="flex-col ">
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-bold text-2xl text-black">هدف ما</h1>
          <p className=" text-justify text-gray-950 font-vazir-thin max-w-full w-80 selection:text-primary selection:bg-black text-[18px]">
            شرکت ما با هدف راحت‌تر کردن تجربه سفر، تلاش می‌کنه مجموعه‌ای کامل از
            محصولات مورد نیاز مسافران رو در یک جا فراهم کنه. از لوازم ضروری
            گرفته تا وسایل کاربردی و خاص سفر، سعی داریم هر چی لازمه رو با کیفیت
            خوب و قیمت مناسب ارائه بدیم. هدفمون اینه که شما کمتر نگران تهیه
            وسایل باشین و بیشتر از سفرتون لذت ببرین.
          </p>
        </div>
        <div className="image-clip-path-1  max-w-full w-100 h-100">
          <img
            src="/images/aboutus.jpg"
            alt="about us"
            className="w-full h-full object-containt"
          />
        </div>
      </AboutUsSectionWrapper>
      <AboutUsSectionWrapper customStyle="flex-col-reverse bg-gray-200  rounded-md">
        <div className="image-clip-path-2  max-w-full w-120 ">
          <img
            src="/images/aboutus.jpg"
            alt="about us"
            className="w-full h-60 object-containt"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-bold text-2xl text-black">داستان ما</h1>
          <p className=" text-justify text-gray-950 font-vazir-thin max-w-full w-80 selection:text-primary selection:bg-black text-[18px]">
            ایده‌ی این کار زمانی شکل گرفت که خودمون برای هر سفر مجبور بودیم از
            چند جا وسایل مختلف تهیه کنیم. کم‌کم به این فکر افتادیم که چرا همه‌چی
            رو یک‌جا جمع نکنیم تا بقیه این دغدغه رو نداشته باشن. حالا با پشتکار
            و علاقه، داریم مسیرمون رو ادامه می‌دیم تا تجربه‌ی سفر برای همه
            آسون‌تر و لذت‌بخش‌تر بشه.
          </p>
        </div>
      </AboutUsSectionWrapper>
    </MainContainer>
  );
}
