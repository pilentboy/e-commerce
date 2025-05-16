import { Link } from "react-router";

export default function Category({
  title,
  image,
  target,
  size,
  bg,
}: {
  title: string;
  image: string;
  target: string;
  size?: string;
  bg?: string;
}) {
  return (
    <li className={`${size ? size : "h-full w-35"}  `}>
      <Link
        to={target}
        className={`flex flex-col items-center justify-center text-black  rounded-3xl  gap-2 w-full h-full hover:scale-102 duration-200  bg-gradient-to-b ${
          bg ? bg : "bg-gray-2"
        }   overflow-hidden`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-20  object-contain mix-blend-multiply"
        />
        {title}
      </Link>
    </li>
  );
}
