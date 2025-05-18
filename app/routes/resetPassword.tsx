import {
  Form,
  Link,
  useNavigate,
  useNavigation,
  type ActionFunctionArgs,
} from "react-router";
import { useEffect, useState } from "react";
import type { Route } from "./+types/resetPassword";
import { login } from "~/api";
import { useAuth } from "~/context/AuthContext";
import { toast } from "react-toastify";
import FormInput from "~/components/form/FormInput";
import FormSectionWrapper from "~/components/form/FormSectionWrapper";
import AuthFormContainer from "~/components/form/AuthFormContainer";
import FormWrapper from "~/components/form/FormWrapper";
import PasswordInput from "~/components/form/PasswordInput";
import Button from "~/components/common/Button";
import SimpleLink from "~/components/form/SimpleLink";

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
  const [OTPSent, setOTPSent] = useState<boolean>(false);
  const [OTPVerified, setOTPVerified] = useState<boolean>(false);

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
      <FormSectionWrapper customStyle="flex-col-reverse">
        <>
          <FormWrapper>
            <Form method="post">
              <div className="flex justify-between  items-center gap-3 h-60  p-5 rounded-md flex-wrap  ">
                {OTPVerified ? (
                  <>
                    <PasswordInput
                      displayPass={displayPass}
                      setDisplayPass={setDisplayPass}
                    />
                    <PasswordInput
                      displayPass={displayPass}
                      setDisplayPass={setDisplayPass}
                      label="تکرار رمز عبور"
                    />
                  </>
                ) : OTPSent ? (
                  <PasswordInput
                    label="لطفا کد ارسال شده را وارد نمائید"
                    name="OTP"
                    displayPass={displayPass}
                    setDisplayPass={setDisplayPass}
                  />
                ) : (
                  <FormInput type="phone" name="phone" label="شماره تلفن" />
                )}

                <div className="w-full flex  md:justify-end">
                  <SimpleLink title="ورود" target="/auth/login" />
                  <Button
                    title={
                      OTPVerified
                        ? "بازیابی"
                        : OTPSent
                        ? "تائید"
                        : "ارسال کد یک بار مصرف"
                    }
                    type="button"
                    action={() => setOTPSent(true)}
                    disabled={state === "submitting"}
                  />
                </div>
              </div>
            </Form>
          </FormWrapper>

          <img src="/svg/login.svg" alt="register" className="w-100" />
        </>
      </FormSectionWrapper>
    </AuthFormContainer>
  );
}
