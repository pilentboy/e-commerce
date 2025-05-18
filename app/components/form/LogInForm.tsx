import { Form, Link } from "react-router";
import FormInput, { FormTextArea } from "./FormInput";
import PasswordInput from "./PasswordInput";
import FormSelect from "./FormSelect";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function LoginForm({
  displayPass,
  setDisplayPass,
  isSubmiting,
}: {
  displayPass: boolean;
  setDisplayPass: any;
  isSubmiting: boolean;
}) {
  return (
    <div className="border border-gray-200 rounded-md h-fit w-full min-h-60 md:w-150">
      <Form method="post">
        <div className="flex justify-between  items-center gap-3 h-60  p-5 rounded-md flex-wrap  ">
          <FormInput label="نام کاربری" name="username" />
          <PasswordInput
            displayPass={displayPass}
            setDisplayPass={setDisplayPass}
          />

          <div className="w-full flex  md:justify-end">
            <Link
              to={"/auth/reset_password"}
              className={`w-full h-10 flex py-5 text-black  hover:text-primary duration-200 items-center justify-between gap-2   cursor-pointer`}
            >
              بازیابی رمز عبور
            </Link>
            <button
              className={`w-45 h-10 flex py-5  font-vazir-thin items-center justify-center gap-2  rounded-md  shadow shadow-gray-1  ${
                isSubmiting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-dark-blue cursor-pointer"
              }`}
              disabled={isSubmiting}
            >
              ورود
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}
