import type { Route } from "./+types/auth";
import AuthLink from "~/components/common/AuthLink";

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
  return (
    <div className="flex flex-col w-full lg:flex-row items-center justify-center  gap-4  h-screen p-2  ">
      <img src="/svg/auth.svg" className="w-[450px] " />
      <AuthLink title="ورود" titleColor="text-white" target="/auth/login" />
      <AuthLink title="ثبت نام" titleColor="text-primary" target="/auth/register" />
    </div>
  );
}
