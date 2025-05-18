import {
  Form,
  useNavigate,
  useNavigation,
  type ActionFunctionArgs,
} from "react-router";
import { useEffect, useState } from "react";
import type { Route } from "./+types/login";
import { login } from "~/api";
import { useAuth } from "~/context/AuthContext";
import { toast } from "react-toastify";
import AuthFormContainer from "~/components/form/AuthFormContainer";
import FormSectionWrapper from "~/components/form/FormSectionWrapper";
import FormWrapper from "~/components/form/FormWrapper";
import PasswordInput from "~/components/form/PasswordInput";
import FormInput from "~/components/form/FormInput";
import Button from "~/components/common/Button";
import SimpleLink from "~/components/form/SimpleLink";

export function meta({}: Route.ActionArgs) {
  return [
    { title: "ورود" },
    {
      name: "description",
      content: "ورود",
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
export default function Login({ actionData }: Route.ComponentProps) {
  const [displayPass, setDisplayPass] = useState<boolean>(false);
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
    <AuthFormContainer>
      <FormSectionWrapper customStyle="flex-col-reverse mt-10">
        <FormWrapper>
          <Form method="post">
            <div className="flex justify-between  items-center gap-3 h-60  p-5 rounded-md flex-wrap  ">
              <FormInput label="نام کاربری" name="username" />
              <PasswordInput
                displayPass={displayPass}
                setDisplayPass={setDisplayPass}
              />

              <div className="w-full flex  md:justify-end">
                <SimpleLink
                  title="بازیابی رمز عبور"
                  target="/auth/reset_password"
                />
                <Button
                  title="ورود"
                  type="submit"
                  disabled={state === "submitting"}
                />
              </div>
            </div>
          </Form>
        </FormWrapper>

        <img src="/svg/login.svg" alt="register" className="w-100" />
      </FormSectionWrapper>
    </AuthFormContainer>
  );
}
