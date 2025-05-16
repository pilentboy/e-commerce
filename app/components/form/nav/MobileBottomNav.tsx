import { BiCategory } from "react-icons/bi";
import { GrBlog } from "react-icons/gr";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import CustomLink from "./CustomLink";
import { FaPeopleGroup } from "react-icons/fa6";

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 rounded-3xl  px-4 border-t border-gray-300 bg-white sm:hidden">
      <ul className="w-full h-full  flex items-center justify-around text-black  ">
        <CustomLink target="categories/all" title="محصولات" icon={<BiCategory />} />
        <CustomLink target="blog" title="بلاگ" icon={<GrBlog />} />

        <CustomLink
          target="about-us"
          title="درباره ما"
          icon={<FaPeopleGroup />}
        />
        <CustomLink
          target="contact-us"
          title="ارتباط با ما"
          icon={<MdOutlineConnectWithoutContact />}
        />
      </ul>
    </nav>
  );
}
