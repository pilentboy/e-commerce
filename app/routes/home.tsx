import { Link } from "react-router";
import type { Route } from "./+types/home";
import { TbArrowBigLeftLines } from "react-icons/tb";

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
    <header className="w-screen h-screen  lg:max-h-[900px] bg-gray-2 flex flex-col items-center justify-center gap-5 sm:pt-10 lg:pt-40 ">
      <h1 className="text-black text-2xl sm:text-3xl font-bold">
        سفرت رو بچین، <span className="text-primary">وسایلش</span> داریم!
      </h1>
      <Link
        to="products"
        className="w-45 h-10 flex py-5 font-vazir-thin items-center justify-center gap-2 bg-dark-blue rounded-3xl  shadow shadow-gray-1 hover:scale-105 duration-200"
      >
        مشاهده محصولات
        <TbArrowBigLeftLines  />
      </Link>
      <img
        src="/images/catoon.png"
        alt="image"
        className="w-full md:w-3/4 lg:w-3/5  object-contain  mix-blend-multiply  "
      />
    </header>
  );
}
