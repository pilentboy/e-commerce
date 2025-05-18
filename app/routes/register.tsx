import { redirect, useNavigation, type ActionFunctionArgs } from "react-router";
import { useEffect, useState } from "react";
import type { Route } from "./+types/register";
import { register } from "~/api";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import RegisterForm from "~/components/form/RegisterForm";
import { toast } from "react-toastify";

export function meta({}: Route.ActionArgs) {
  return [
    { title: "ثبت نام" },
    {
      name: "description",
      content: "ثبت نام",
    },
  ];
}

export async function action({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    console.log(formData)
    const { error } = await register({
      username: formData.get("username"),
      password: formData.get("password"),
    });
    if (error) {
      console.log(error);
      return { error: error[0].msg || error };
    }
    return redirect("/auth/login");
  } catch (error) {
    return { error: "an unknown error occurred" };
  }
}

export default function Register({ actionData }: Route.ComponentProps) {
  const [displayPass, setDisplayPass] = useState<boolean>(false);
  const [nextSection, setNextSection] = useState<boolean>(false);

  const { state } = useNavigation();

  useEffect(() => {
    if (actionData?.error) {
      toast.error(actionData?.error, {
        position: "top-center",
      });
    }
  }, [actionData]);

  return (
    <main className="mt-25 mb-10 flex-col md:mt-25 w-full min-h-screen flex  lg:flex-col items-center gap-2 px-5 md:px-40 ">
      {/* form progress */}
      <div className="flex items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <FaUser className="text-primary text-[20px]" />
          <span className="text-primary text-center text-[8px] md:text-[12px]">
            اطلاعات کاربر
          </span>
        </div>

        <div className={`flex gap-1  items-center text-primary  `}>
          <span
            className={`w-3 h-3 rounded-full bg-primary  ${
              nextSection ? " opacity-100" : "opacity-70"
            }`}
          ></span>
          <div
            className={`w-20 px-20 border border-dashed border-primary ${
              nextSection ? " opacity-100" : "opacity-70"
            }`}
          ></div>
          <span
            className={`w-3 h-3 rounded-full bg-primary  ${
              nextSection ? " opacity-100" : "opacity-70"
            }`}
          ></span>
        </div>

        <div
          className={`flex flex-col items-center gap-2 text-primary ${
            nextSection ? " opacity-100" : "opacity-70"
          }`}
        >
          <FaPhoneAlt className=" text-[22px]" />

          <span className=" text-center text-[8px] md:text-[12px]">
            اطلاعات تماس
          </span>
        </div>
      </div>
      {/* title */}
      <h1 className="text-primary self-start mt-5 ">فرم ثبت اطلاعات</h1>
      {/* form */}
      <section className="flex flex-col items-center lg:flex-row">
        <RegisterForm
          setDisplayPass={setDisplayPass}
          displayPass={displayPass}
          isSubmiting={state === "submitting"}
          nextSection={nextSection}
          setNextSection={setNextSection}
          submitTitle="ثبت نام"
        />
        <img src="/svg/register.svg" alt="register" className="w-110" />
      </section>
    </main>
  );
}
