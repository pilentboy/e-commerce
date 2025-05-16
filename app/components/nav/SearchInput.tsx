import { Form } from "react-router";

export default function SearchInput({
  disSeaarchInput,
}: {
  disSeaarchInput: boolean;
}) {
  return (
    <Form
      className={`absolute top-18 lg:top-1 left-[50%] translate-x-[-50%] border-primary border lg:border-none  bg-gray-2 w-full md:w-150 h-12 outline-none rounded-2xl p-2 duration-200 z-100  ${
        disSeaarchInput ? "translate-y-0" : "translate-y-[-500%]  "
      }`}
    >
      <input
        type="text"
        name="search"
        className="text-black w-full h-full outline-none selection:text-primary"
      />
    </Form>
  );
}
