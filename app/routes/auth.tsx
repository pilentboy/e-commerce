import { Link } from "react-router";
import type { Route } from "./+types/auth";
import { useAuth } from "~/context/AuthContext";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "ورود / ثبت نام" },
    {
      name: "description",
      content: "ورود و یا ثبت نام",
    },
  ];
}
export default function Auth() {
  const { isAuthenticated, setLogout } = useAuth();

  return (
    <div className="flex flex-col w-full md:flex-row items-center justify-center  gap-4  h-screen p-2  ">
      <img src="/auth.png" className="w-[450px] " />
      {isAuthenticated ? (
        <button
          type="button"
          className=" w-36 h-12 flex items-center justify-center  bg-gray-800  rounded-md border border-transparent  cursor-pointer  "
          onClick={setLogout}
        >
          Logout
        </button>
      ) : (
        <div className=" w-36 h-12 flex items-center justify-center  bg-gray-800  rounded-md border border-transparent ">
          <Link to={"/auth/login"}>Login</Link>
        </div>
      )}
      <div className=" w-36 h-12 flex items-center justify-center  bg-gray-800  rounded-md border border-transparent text-orange-400 sm:text-white">
        <Link to={"/auth/register"}>Register</Link>
      </div>
    </div>
  );
}
