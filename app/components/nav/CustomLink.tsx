import { NavLink } from "react-router";

export default function CustomLink({
  title,
  target,
  children,
  icon,
}: {
  title: string;
  target: string;
  children?: React.ReactElement;
  icon?: React.ReactElement;
}) {
  return (
    <li
      className={`relative hover:text-primary duration-200  py-2 sm:text-[12px] xl:text-[15px] ${
        children && "group"
      }`}
    >
      <NavLink
        to={target}
        className={({ isActive }) =>
          `${icon ? "flex flex-col gap-2 items-center justify-center" : ""} ${
            isActive ? "text-primary" : "text-black"
          }`
        }
      >
        {icon && <i className="text-[17px]">{icon}</i>}

        {title}
      </NavLink>
      {children}
    </li>
  );
}
