import { Form, Link } from "react-router";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";

export default function ResetPasswordForm({
  displayPass,
  setDisplayPass,
  isSubmiting,
  resetPasswordInput,
  setResetPasswordInput,
}: {
  displayPass: boolean;
  setDisplayPass: any;
  isSubmiting: boolean;
  resetPasswordInput: boolean;
  setResetPasswordInput: any;
}) {
  return (
    <div className="border border-gray-200 rounded-md h-fit w-full min-h-60 md:w-150">
      <Form method="post">
        <div className="flex justify-between  items-center gap-3 h-60  p-5 rounded-md flex-wrap  ">
          {resetPasswordInput ? (
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
          ) : (
            <FormInput type="phone" name="phone" label="شماره تلفن" />
          )}

          <div className="w-full flex  md:justify-end">
            <Link
              to={"/auth/login"}
              className={`w-full h-10 flex py-5 text-black  hover:text-primary duration-200 items-center justify-between gap-2   cursor-pointer`}
            >
              ورود
            </Link>
            <button
              type="button"
              className={`min-w-45 h-10 flex py-5  font-vazir-thin items-center justify-center gap-2  rounded-md  shadow shadow-gray-1  ${
                isSubmiting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-dark-blue cursor-pointer"
              }`}
              onClick={() => setResetPasswordInput((pre: boolean) => !pre)}
              disabled={isSubmiting}
            >
              {resetPasswordInput ? "بازیابی" : "ارسال کد یک بار مصرف"}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}
