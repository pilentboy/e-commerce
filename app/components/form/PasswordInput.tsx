import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function PasswordInput({
  displayPass,
  setDisplayPass,
  label,
}: {
  displayPass: boolean;
  setDisplayPass: any;
  label?: "تکرار رمز عبور";
}) {
  return (
    <div className="  w-68 flex flex-col gap-1 relative">
      <label htmlFor="password" className="mr-1 text-gray-500">
        {label ? label : "رمز عبور"}
      </label>
      <input
        type={displayPass ? "text" : "password"}
        name="password"
        id="password"
        className="outline-none rounded-md   w-72  sm:w-full bg-white text-black border border-gray-300   p-2 "
        required
      />
      {displayPass ? (
        <FaRegEye
          className="absolute w-5 h-5 rounded-full left-2 top-[55%] hover:scale-105  duration-200 cursor-pointer z-40 text-gray-400"
          onClick={() => setDisplayPass((pre: boolean) => !pre)}
        />
      ) : (
        <FaRegEyeSlash
          className="absolute w-5 h-5 rounded-full left-2 top-[55%] hover:scale-105  duration-200 cursor-pointer z-40 text-gray-400"
          onClick={() => setDisplayPass((pre: boolean) => !pre)}
        />
      )}
    </div>
  );
}
