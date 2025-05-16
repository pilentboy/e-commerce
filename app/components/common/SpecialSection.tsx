import { TbArrowBigLeftLines } from "react-icons/tb";
import { Link } from "react-router";

export default function SpecialSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 w-full lg:w-250 min-h-100   mx-auto">
      <div className="flex  justify-between items-center w-full">
        <h4 className="text-black font-bold">محصولات پرفروش</h4>
        <Link
          to={"best_sales"}
          className="w-35 h-8 flex py-5   font-vazir-thin items-center justify-center gap-2 bg-primary rounded-3xl  shadow shadow-gray-1 hover:scale-105 duration-200 "
        >
          مشاهده بیشتر
          <TbArrowBigLeftLines />
        </Link>
      </div>
      <div className="flex gap-2  flex-col flex-wrap justify-between items-center w-full md:flex-row md:flex-wrap">
        {children}
      </div>
    </section>
  );
}
