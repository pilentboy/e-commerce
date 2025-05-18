import LinkWrapepr, { LinkWrapeprItem } from "./LinkWrapepr";
import SocialMedias, { SocialMediaItem } from "./SocialMedias";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="flex float-end gap-8 md:gap-0 flex-col md:flex-row pb-25 md:pb-2 pt-4 px-10 md:items-center justify-around w-screen min-h-70 bg-gray-2">
      <LinkWrapepr firstTitle="لینک های" secondTitle="مهم">
        <>
          <LinkWrapeprItem title="بلاگ" target="blog" />
          <LinkWrapeprItem title="محصولات" target="products" />
          <LinkWrapeprItem title="درباره ما" target="about-us" />
          <LinkWrapeprItem title="ارتباط با ما" target="contact-us" />
        </>
      </LinkWrapepr>
      <section className="flex flex-col items-center gap-4">
        <Logo />

        <p className="text-black selection:text-primary selection:bg-black">
          "تجهیزات حرفه ای، ماجراجویی های فراموش نشدنی!"
        </p>

        <SocialMedias>
          <>
            <SocialMediaItem target="" icon={<FaTelegram />} />
            <SocialMediaItem target="" icon={<FaInstagram />} />
            <SocialMediaItem target="" icon={<FaFacebook />} />
            <SocialMediaItem target="" icon={<IoLogoYoutube />} />
          </>
        </SocialMedias>
      </section>
      <LinkWrapepr firstTitle="دسته بندی" secondTitle="محصولات">
        <>
          <LinkWrapeprItem title="چادر" target="" />
          <LinkWrapeprItem title="چراغ قوه" target="" />
          <LinkWrapeprItem title="فلاسک" target="" />
          <LinkWrapeprItem title="پتو" target="" />
        </>
      </LinkWrapepr>
    </footer>
  );
}
