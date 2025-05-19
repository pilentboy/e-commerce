import {
  Form,
  redirect,
  useNavigation,
  type ActionFunctionArgs,
} from "react-router";
import { useEffect, useState } from "react";
import type { Route } from "./+types/register";
import { register } from "~/api";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import AuthFormContainer from "~/components/form/AuthFormContainer";
import FormSectionWrapper from "~/components/form/FormSectionWrapper";
import FormInput from "~/components/form/FormInput";
import FormSelect from "~/components/form/FormSelect";
import provinces from ".././data/provinces.json";
import cities from ".././data/cities.json";
import PasswordInput from "~/components/form/PasswordInput";
import FormWrapper from "~/components/form/FormWrapper";
import FormProgressItem from "~/components/form/FormProgressItem";
import Button from "~/components/common/Button";

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
    console.log(formData);
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
  const [selectedProvince, setSelectedProvince] = useState<any>();
  const [provinceCities, setProvinceCities] = useState<any>();

  const { state } = useNavigation();

  useEffect(() => {
    if (actionData?.error) {
      toast.error(actionData?.error, {
        position: "top-center",
      });
    }
  }, [actionData]);

  useEffect(() => {
    if (!selectedProvince) return;

    setProvinceCities(
      cities.find((city: any) => city.name === selectedProvince)
    );
  }, [selectedProvince]);

  return (
    <AuthFormContainer>
      <>
        {/* register form progress */}
        {/* <div className="flex items-center gap-10">
          <FormProgressItem
            title="اطلاعات کاربر"
            icon={<FaUser className="text-[20px]" />}
            iconOpacity="opacity-100"
          />

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

          <FormProgressItem
            title="اطلاعات تماس"
            icon={<FaPhoneAlt className=" text-[22px]" />}
            iconOpacity={nextSection ? " opacity-100" : "opacity-70"}
          />
        </div> */}

        {/* title */}
        <h1 className="text-primary self-start mt-0 ">فرم ثبت اطلاعات</h1>
        {/* form */}

        <FormSectionWrapper customStyle="flex-col">
          <FormWrapper>
            <Form method="post">
              <div className="flex justify-center items-center gap-3   p-5 rounded-md flex-wrap  ">
                <FormInput label="نام" name="firstname" />
                <FormInput label="نام خانوادگی" name="lastname" />
                <FormSelect
                  label="استان"
                  name="province"
                  data={provinces.provinces}
                  setSelectedOption={setSelectedProvince}
                />
                <FormSelect
                  label="شهر"
                  name="city"
                  disabled={selectedProvince ? false : true}
                  data={provinceCities?.cities || []}
                />

                <FormInput label="آدرس" name="address" textArea={true} />
                <FormInput label="نام کاربری" name="username" />
                <PasswordInput
                  displayPass={displayPass}
                  setDisplayPass={setDisplayPass}
                />
                <FormInput
                  label="ایمیل"
                  name="email"
                  type="email"
                  required={false}
                />
                <FormInput label="شماره همراه" name="phone" type="phone" />

                <div className="w-full flex justify-center  md:justify-end">
                  <Button
                    title="ثبت نام"
                    type="submit"
                    disabled={state === "submitting"}
                  />
                </div>
              </div>
            </Form>
          </FormWrapper>

          <img src="/svg/register.svg" alt="register" className="w-110" />
        </FormSectionWrapper>
      </>
    </AuthFormContainer>
  );
}
