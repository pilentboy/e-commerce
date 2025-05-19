export default function FormInput({
  label,
  name,
  required,
  type,
  textArea,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: "text" | "email" | "phone";
  textArea?: boolean;
}) {
  const direction =
    type === "email" || type === "phone" || name === "username"
      ? "text-left"
      : "text-right";

  const inputStyle = `outline-none rounded-md p-2  flex-wrap  bg-white text-black border border-gray-300 ${direction} w-72  sm:w-full focus:border-dark-blue duration-200`;
  const wrapperStyle = `flex flex-col gap-1 ${
    textArea ? "w-68 md:w-full" : " w-68"
  }`;

  return (
    <div className={wrapperStyle}>
      <label htmlFor={name} className="mr-1 text-gray-500">
        {label}
      </label>
      {textArea ? (
        <textarea
          name={name}
          maxLength={200}
          id={name}
          className={inputStyle}
          required={required || true}
        />
      ) : (
        <input
          type={type || "text"}
          name={name}
          id={name}
          className={inputStyle}
          required={required || true}
        />
      )}
    </div>
  );
}
