import MainContainer from "~/components/common/MainContainer";
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
  return (
    <MainContainer>
      <span>Blog</span>
    </MainContainer>
  );
}
