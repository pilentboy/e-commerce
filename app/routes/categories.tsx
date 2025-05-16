import type { Route } from "./+types/categories";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "دسته بندی" },
    {
      name: "description",
      content:
        "دسته بندی",
    },
  ];
}

export default function Categories() {
    return <span>categories </span>;
  }