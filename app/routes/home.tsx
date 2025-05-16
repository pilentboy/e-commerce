import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "خانه" },
    {
      name: "description",
      content:
        "در سریع ترین زمان ممکن محصولات مورد نیاز خود را از بین بهترین محصولات انتخاب کنید و خریدی لذت بخش را همراه با جوایز متنوع تجربه کنید.",
    },
  ];
}

export default function Home() {
  return (
    <header className="w-screen h-screen max-h-[900px] bg-gray-2 "></header>
  );
}
