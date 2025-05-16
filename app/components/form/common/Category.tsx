import { Link } from "react-router";

export default function Category({
  title,
  image,
  target,
}: {
  title: string;
  image: string;
  target: string;
}) {
  return (
    <li className="h-full">
      <Link
        to={target}
        className="flex flex-col items-center justify-center text-black  rounded-3xl  gap-2 h-full w-35 hover:scale-102 duration-200  bg-gradient-to-b bg-gray-2   overflow-hidden"
      >
        <img src={image} alt={title} className="w-full h-20  object-contain mix-blend-multiply" />
        {title}
      </Link>
    </li>
  );
}
