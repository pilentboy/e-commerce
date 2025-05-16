import { Link } from "react-router";
import LinkWrapepr, { LinkWrapeprItem } from "./LinkWrapepr";
import SocialMedias, { SocialMediaItem } from "./SocialMedias";

export default function Footer() {
  return (
    <footer className="flex gap-8 md:gap-0 flex-col md:flex-row pb-25 md:pb-2 pt-4 px-10 md:items-center justify-around w-screen min-h-70 bg-gray-2">
      <LinkWrapepr firstTitle="لینک های" secondTitle="مهم">
        <>
          <LinkWrapeprItem title="بلاگ" target="blog" />
          <LinkWrapeprItem title="بلاگ" target="blog" />
          <LinkWrapeprItem title="بلاگ" target="blog" />
          <LinkWrapeprItem title="بلاگ" target="blog" />
        </>
      </LinkWrapepr>
      <section className="flex flex-col items-center gap-4">
        <div className="flex items-center  justify-center gap-1    shadow-2xl">
          <h1 className="font-bold text-black">VENTURA</h1>
          <Link to={"/"}>
            <img
              src="/images/tent.png"
              alt="logo"
              className="w-8"
              onContextMenu={(e: any) => e.preventDefault()}
            />
          </Link>
        </div>
        <p className="text-black selection:text-primary selection:bg-black">
          "تجهیزات حرفه ای، ماجراجویی های فراموش نشدنی!"
        </p>

        <SocialMedias>
          <>
            <SocialMediaItem target="" icon={"T"} />
            <SocialMediaItem target="" icon={"T"} />
            <SocialMediaItem target="" icon={"T"} />
            <SocialMediaItem target="" icon={"T"} />
          </>
        </SocialMedias>
      </section>
      <LinkWrapepr firstTitle="دسته بندی" secondTitle="محصولات">
        <>
          <LinkWrapeprItem title="بلاگ" target="blog" />
          <LinkWrapeprItem title="بلاگ" target="blog" />
          <LinkWrapeprItem title="بلاگ" target="blog" />
          <LinkWrapeprItem title="بلاگ" target="blog" />
        </>
      </LinkWrapepr>
    </footer>
  );
}
