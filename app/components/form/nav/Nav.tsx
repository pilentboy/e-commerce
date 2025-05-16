import { Form, Link } from "react-router";
import CustomLink from "./CustomLink";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Category from "../common/Category";
import MobileBottomNav from "./MobileBottomNav";
import { FaAngleDown } from "react-icons/fa6";
import SearchInput from "./SearchInput";

export default function Nav() {
  const [disSeaarchInput, setDisSearchInput] = useState<boolean>(false);
  return (
    <>
      <nav className="absolute top-5 left-[50%] translate-x-[-50%] w-[95%] sm:w-[85%] h-14 rounded-3xl bg-white flex items-center justify-between shadow px-2 ">
        <div className="flex items-center  justify-center gap-1    shadow-2xl">
          <h1 className="font-bold text-black">VENTURA</h1>
          <Link to={"/"}>
            <img src="/images/tent.png" alt="logo" className="w-8" />
          </Link>
        </div>
        <ul
          className={`hidden items-center gap-7 lg:gap-9 text-black    font-vazir ${
            disSeaarchInput ? "md:flex lg:hidden" : "md:flex"
          }`}
        >
          <CustomLink target="categories/test" title="دسته بندی">
            <>
              <FaAngleDown className="text-primary absolute -left-5 top-1 hidden lg:block hover:" />
              <ul className="absolute top-5  gap-2 rounded-3xl  -left-60 z-100 min-w-[500px] h-[140px] bg-white  border-t border-primary  hidden lg:group-hover:flex items-center justify-between p-2 ">
                <Category
                  target={`categories/${"flashlights"}`}
                  title="چراغ قوه"
                  image="/images/flashlight-isolated_770883-3085 1.png"
                />
                <Category
                  target={`categories/${"backpack"}`}
                  title="کوله پشتی"
                  image="/images/Layer 000 1.png"
                />
                <Category
                  target={`categories/${"flask"}`}
                  title="فلاسک"
                  image="/images/photorealistic-water-bottle_23-2151049018 1.png"
                />
                <Category
                  target={`categories/${"glass"}`}
                  title="عینک"
                  image="/images/classic-sunglasses-white-background-minimalist-eyewear-modern-style_431161-69272 1.png"
                />
              </ul>
            </>
          </CustomLink>
          <CustomLink target="products" title="محصولات" />
          <CustomLink target="blog" title="بلاگ" />
          <CustomLink target="about-us" title="درباره ما" />
          <CustomLink target="contact-us" title="ارتباط با ما" />
        </ul>
        <div className="flex items-center   gap-2">
          <button
            type="button"
            className="bg-gray-2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer p-2"
            onClick={() => setDisSearchInput((pre) => !pre)}
          >
            {disSeaarchInput ? (
              <IoClose
                className="text-red-500 text-2xl hover:scale-105 duration-200"
                title="بستن منوی جستوجو"
              />
            ) : (
              <img
                src="/svg/search-normal.svg"
                alt="search"
                className="w-full h-full hover:scale-105 duration-200"
                title="جستوجو"
              />
            )}
          </button>
          <Link
            to={"auth"}
            className="bg-primary text-sm w-32 h-10 rounded-3xl flex items-center  hover:opacity-90 duration-200 justify-center"
          >
            ورود / ثبت نام
          </Link>
        </div>
        <SearchInput disSeaarchInput={disSeaarchInput} />
      </nav>
      <MobileBottomNav />
    </>
  );
}
