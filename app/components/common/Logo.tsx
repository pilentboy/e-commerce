import { Link } from "react-router";

export default function Logo() {
  return (
    <Link
      to={"/"}
      className="font-bold text-black flex items-center  justify-center gap-1    shadow-2xl"
    >
      VENTURA
      <img
        src="/images/tent.png"
        alt="logo"
        className="w-8"
        onContextMenu={(e: any) => e.preventDefault()}
      />
    </Link>
  );
}
