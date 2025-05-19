import { Link } from "react-router";

export default function ({ title, target }: { title: string; target: string }) {
  return (
    <Link
      to={target}
      className={`w-full h-10 flex py-5 text-black text-sm md:text-base  hover:text-primary duration-200 items-center justify-between gap-2   cursor-pointer`}
    >
      {title}
    </Link>
  );
}
