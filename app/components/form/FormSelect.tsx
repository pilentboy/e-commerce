export default function FormSelect({
  label,
  name,
  data,
  setSelectedOption,
  disabled,
}: {
  label: string;
  name: string;
  data: any;
  setSelectedOption?: any;
  disabled?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-1  w-68  ${
        disabled ? "opacity-50" : "opacity-100"
      }`}
    >
      <label htmlFor={name} className="mr-1 text-gray-500">
        {label}
      </label>
      <select
        disabled={disabled || false}
        name={name}
        id={name}
        required
        className="outline-none rounded-md p-2  w-72  sm:w-full bg-white text-black border border-gray-300"
        onChange={
          setSelectedOption
            ? (e: any) => setSelectedOption(e.target.value)
            : undefined
        }
      >
        {data.map((option: any) => (
          <option value={option.name} key={option.id} id={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
