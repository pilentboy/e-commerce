import type { Route } from "./+types/contactus";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ارتباط با ما" },
    {
      name: "description",
      content: "ارتباط با ما",
    },
  ];
}

export default function ContactUs() {
  return <span>contact us</span>;
}
