import type { Route } from "./+types/aboutus";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "درباره ما" },
    {
      name: "description",
      content: "درباره ما",
    },
  ];
}

export default function AboutUs() {
  return <span>about us</span>;
}
