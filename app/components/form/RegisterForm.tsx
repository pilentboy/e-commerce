import { Form } from "react-router";
import FormInput, { FormTextArea } from "./FormInput";
import PasswordInput from "./PasswordInput";
import FormSelect from "./FormSelect";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import provinces from "../../data/provinces.json";
import cities from "../../data/cities.json";

import { useEffect, useState } from "react";
export default function RegisterForm({
  displayPass,
  setDisplayPass,
  isSubmiting,
  nextSection,
  setNextSection,
  submitTitle,
}: {
  displayPass: boolean;
  setDisplayPass: any;
  isSubmiting: boolean;
  nextSection?: boolean;
  setNextSection?: any;
  submitTitle: string;
}) {
  const [selectedProvince, setSelectedProvince] = useState<any>();
  const [provinceCities, setProvinceCities] = useState<any>();
  useEffect(() => {
    if (!selectedProvince) return;

    setProvinceCities(
      cities.find((city: any) => city.name === selectedProvince)
    );
  }, [selectedProvince]);
  return (
    <div className="border border-gray-200 rounded-md h-fit w-full min-h-60 md:w-150">
      <Form method="post">
        {nextSection ? (
          <div className="flex justify-between items-center gap-3 h-60    p-5 rounded-md flex-wrap  ">
            <FormInput label="شماره همراه" name="phone" type="phone" />

            <div className="w-full flex flex-col md:flex-row md:justify-end gap-5">
              <button
                type="button"
                className={`w-45 h-10 flex py-5  font-vazir-thin items-center justify-center gap-2  rounded-md  shadow shadow-gray-1  ${
                  isSubmiting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-dark-blue cursor-pointer"
                }`}
                disabled={isSubmiting}
                onClick={() => setNextSection((pre: boolean) => !pre)}
              >
                <FaChevronRight />
                مرحله قبل
              </button>
              <button
                className={`w-45 h-10 flex py-5  font-vazir-thin items-center justify-center gap-2  rounded-md  shadow shadow-gray-1  ${
                  isSubmiting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-dark-blue cursor-pointer"
                }`}
                disabled={isSubmiting}
              >
                {submitTitle}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center gap-3   p-5 rounded-md flex-wrap  ">
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
              // setSelectedOption={setSelecte}
            />
            {/* <FormSelect label="شهر" name="city" /> */}
            <FormTextArea label="آدرس" name="address" />
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

            <div className="w-full flex  md:justify-end">
              <button
                type="button"
                className="w-45 h-10 flex py-5  font-vazir-thin items-center justify-center gap-2 bg-dark-blue rounded-md  shadow shadow-gray-1 cursor-pointer"
                onClick={() => setNextSection((pre: boolean) => !pre)}
              >
                مرحله بعد
                <FaChevronLeft />
              </button>
            </div>
          </div>
        )}
      </Form>
    </div>
  );
}
