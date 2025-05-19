import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function PasswordInput({
  displayPass,
  setDisplayPass,
  label,
  name,
}: {
  displayPass: boolean;
  setDisplayPass: any;
  label?: string;
  name?: string;
}) {
  const iconStyle =
    "absolute w-5 h-5 rounded-full right-2 top-[55%] hover:scale-105  duration-200 cursor-pointer z-40 text-gray-400  ";
  const changeDisplayStatus = () => setDisplayPass((pre: boolean) => !pre);
  return (
    <div className="  w-68 flex flex-col gap-1 relative">
      <label htmlFor="password" className="mr-1 text-gray-500">
        {label ? label : "رمز عبور"}
      </label>
      <input
        type={displayPass ? "text" : "password"}
        name={name || "password"}
        id="password"
        className="outline-none rounded-md  text-left  w-72  sm:w-full bg-white text-black border border-gray-300   p-2 focus:border-dark-blue duration-200 "
        required
      />
      {displayPass ? (
        <FaRegEye className={iconStyle} onClick={changeDisplayStatus} />
      ) : (
        <FaRegEyeSlash className={iconStyle} onClick={changeDisplayStatus} />
      )}
    </div>
  );
}
