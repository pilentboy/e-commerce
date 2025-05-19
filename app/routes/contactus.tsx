import MainContainer from "~/components/common/MainContainer";
import type { Route } from "./+types/contactus";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaPhone, FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ارتباط با ما" },
    {
      name: "description",
      content: "ارتباط با ما",
    },
  ];
}

export default function ContactUs() {
  return (
    <MainContainer>
      <section className="w-full  h-100  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center   gap-5">
        <div className="flex items-center gap-1">
          <h1 className="text-black font-bold">ارتباط با ما</h1>
          <MdOutlineConnectWithoutContact className="text-primary text-[100px] md:text-[150px]" />
        </div>
        <div className="flex items-center flex-col gap-1 border-b border-gray-600 w-100 pb-2">
          <h2 className="text-gray-600 font-bold">راه های ارتباطی با ما</h2>
        </div>
        <div className="flex items-center w-100 flex-wrap flex-col md:flex-row gap-3 justify-center">
          <div className="w-45 h-10 flex py-5  font-vazir-thin items-center justify-center gap-2 bg-dark-blue rounded-3xl  shadow shadow-gray-1 hover:scale-102 cursor-pointer duration-200">
            <h3>02100000000</h3>
            <FaPhone className="text-primary" />
          </div>
          <div className="w-45 h-10 flex py-5  font-vazir-thin items-center justify-center gap-2 bg-dark-blue rounded-3xl  shadow shadow-gray-1 hover:scale-102 cursor-pointer duration-200">
            <h3>02100000000</h3>
            <FaPhone className="text-primary" />
          </div>
          <div className="w-45 h-10 flex py-5  font-vazir-thin items-center justify-center gap-2 bg-dark-blue rounded-3xl  shadow shadow-gray-1 hover:scale-102 cursor-pointer duration-200">
            <h3>telegram@</h3>
            <FaTelegram className="text-primary" />
          </div>
          <div className="w-45 h-10 flex py-5  font-vazir-thin items-center justify-center gap-2 bg-dark-blue rounded-3xl  shadow shadow-gray-1 hover:scale-102 cursor-pointer duration-200">
            <h3>telegram@</h3>
            <FaTelegram className="text-primary" />
          </div>
          <div className="w-45 h-10 flex py-5  font-vazir-thin items-center justify-center gap-2 bg-dark-blue rounded-3xl  shadow shadow-gray-1 hover:scale-102 cursor-pointer duration-200">
            <h3>telegram@</h3>
            <FaTelegram className="text-primary" />
          </div>
          <div className="w-45 h-10 flex py-5  font-vazir-thin items-center justify-center gap-2 bg-dark-blue rounded-3xl  shadow shadow-gray-1 hover:scale-102 cursor-pointer duration-200">
            <h3>telegram@</h3>
            <FaTelegram className="text-primary" />
          </div>
        </div>
      </section>
    </MainContainer>
  );
}
