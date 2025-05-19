import MainContainer from "~/components/common/MainContainer";
import type { Route } from "./+types/product";

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
  return (
    <MainContainer>
      <span>Blog</span>
    </MainContainer>
  );
}
