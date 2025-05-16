import type { Route } from "./+types/bestSales";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "پرفروش ترین ها" },
    {
      name: "description",
      content: "پرفروش ترین ها",
    },
  ];
}

export default function BestSales() {
  return <span>best sales </span>;
}
