import type { Route } from "./+types/categories";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "محصول" },
    {
      name: "description",
      content: "محصول",
    },
  ];
}

export default function Product() {
  return <span>product </span>;
}
