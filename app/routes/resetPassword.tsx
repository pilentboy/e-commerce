import {
  useNavigate,
  useNavigation,
  type ActionFunctionArgs,
} from "react-router";
import { useEffect, useState } from "react";
import type { Route } from "./+types/resetPassword";
import { login } from "~/api";
import ResetPasswordForm from "~/components/form/ResetPasswordForm";
import { useAuth } from "~/context/AuthContext";
import { toast } from "react-toastify";
import FormInput from "~/components/form/FormInput";

export function meta({}: Route.ActionArgs) {
  return [
    { title: "بازیابی رمز عبور" },
    {
      name: "description",
      content: "بازیابی رمز عبور",
    },
  ];
}

export async function action({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    const { data, error } = await login({
      username: formData.get("username"),
      password: formData.get("password"),
    });
    if (error) {
      return { error: error[0].msg || error };
    }

    return { token: data.token };
  } catch (error) {
    console.log(error);
    return { error: "an unknown error occurred" };
  }
}
export default function ResetPassword({ actionData }: Route.ComponentProps) {
  const [displayPass, setDisplayPass] = useState<boolean>(false);
  const [resetPasswordInput, setResetPasswordInput] = useState<boolean>(false);

  const { state } = useNavigation();

  const navigate = useNavigate();
  const { setLogin } = useAuth();
  useEffect(() => {
    if (actionData?.token) {
      setLogin(actionData.token);
      navigate("/");
    } else if (actionData?.error) {
      toast.error(actionData?.error, {
        position: "top-center",
      });
    }
  }, [actionData]);

  return (
    <main className="mt-25   mb-5 flex-col md:mt-35 w-full min-h-screen flex  lg:flex-col items-center gap-2 px-5 md:px-40 ">
      <section className="flex flex-col-reverse items-center lg:flex-row">
        
        <ResetPasswordForm
          setDisplayPass={setDisplayPass}
          displayPass={displayPass}
          isSubmiting={state === "submitting"}
          resetPasswordInput={resetPasswordInput}
          setResetPasswordInput={setResetPasswordInput}
        />

        <img src="/svg/login.svg" alt="register" className="w-100" />
      </section>
    </main>
  );
}
