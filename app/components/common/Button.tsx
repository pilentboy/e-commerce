export default function Button({
  title,
  action,
  type,
  disabled,
}: {
  title: string;
  action?: any;
  type: "submit" | "button";
  disabled: boolean;
}) {
  return (
    <button
      className={`min-w-45 h-10 flex py-5  font-vazir-thin items-center justify-center gap-2 bg-dark-blue rounded-md  shadow shadow-gray-1  ${
        disabled
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-dark-blue cursor-pointer"
      } `}
      onClick={action}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
