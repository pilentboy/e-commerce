import MainContainer from "~/components/common/MainContainer";
import type { Route } from "./+types/products";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "محصولات" },
    {
      name: "description",
      content: "محصولات",
    },
  ];
}

export default function Products() {
  return (
    <MainContainer>
      <span>Blog</span>
    </MainContainer>
  );
}
