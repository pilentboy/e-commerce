export function FormTextArea({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1  w-full ">
      <label htmlFor={name} className="mr-1 text-gray-500">
        {label}
      </label>
      <textarea
        name={name}
        maxLength={200}
        id={name}
        className={`outline-none rounded-md p-2  w-72  sm:w-full bg-white text-black border border-gray-300 `}
        required={required || true}
      />
    </div>
  );
}

export default function FormInput({
  label,
  name,
  required,
  type,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: "text" | "email" | "phone";
}) {
  return (
    <div className="flex flex-col gap-1  w-68 ">
      <label htmlFor={name} className="mr-1 text-gray-500">
        {label}
      </label>
      <input
        type={type || "text"}
        name={name}
        id={name}
        className={`outline-none rounded-md p-2  w-72  sm:w-full bg-white text-black border border-gray-300 ${
          type === "email" ? "text-left" : "text-right"
        }`}
        required={required || true}
      />
    </div>
  );
}
