import { TbArrowBigLeftLines } from "react-icons/tb";
import { Link } from "react-router";

export default function GoProducts({ target }: { target: string }) {
  return (
    <Link
      to={target}
      className="w-45 h-10 flex py-5  pulse-anima font-vazir-thin items-center justify-center gap-2 bg-dark-blue rounded-3xl  shadow shadow-gray-1 hover:scale-105 duration-200"
    >
      مشاهده محصولات
      <TbArrowBigLeftLines />
    </Link>
  );
}
