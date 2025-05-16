import type { Route } from "./+types/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "وبلاگ" },
    {
      name: "description",
      content: "وبلاگ",
    },
  ];
}
export default function Blog() {
  return <span>Blog</span>;
}
