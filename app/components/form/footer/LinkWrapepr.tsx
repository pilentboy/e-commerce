import { Link } from "react-router";

export function LinkWrapeprItem({
  title,
  target,
}: {
  title: string;
  target: string;
}) {
  return (
    <li className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
      <Link to={target} className="hover:text-primary duration-200 ">
        {title}
      </Link>
    </li>
  );
}

export default function LinkWrapepr({
  firstTitle,
  secondTitle,
  children,
}: {
  firstTitle: string;
  secondTitle: string;
  children: React.ReactElement;
}) {
  return (
    <ul className="flex flex-col gap-2 text-black">
      <h1 className="text-black font-bold">
        {firstTitle}
        <span className="text-primary"> {secondTitle}</span>
      </h1>
      {children}
    </ul>
  );
}
