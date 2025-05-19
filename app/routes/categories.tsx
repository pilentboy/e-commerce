import MainContainer from "~/components/common/MainContainer";
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
    return <MainContainer>
          <span>Blog</span>
        </MainContainer>;
  }