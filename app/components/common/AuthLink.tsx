import { Link } from "react-router";

export default function AuthLink({
  title,
  target,
  titleColor,
}: {
  title: string;
  target: string;
  titleColor: string;
}) {
  return (
    <Link
      to={target}
      className={`w-36 h-12 flex items-center justify-center  bg-gray-800  rounded-md border border-transparent ${titleColor}`}
    >
      {title}
    </Link>
  );
}
