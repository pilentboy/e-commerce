import { Link } from "react-router";

export function SocialMediaItem({
  icon,
  target,
}: {
  icon: any;
  target: string;
}) {
  return (
    <li className="bg-primary flex items-center justify-center w-8 h-8 rounded-full text-white">
      <Link to={target}>{icon}</Link>
    </li>
  );
}
export default function SocialMedias({
  children,
}: {
  children: React.ReactElement;
}) {
  return <ul className="flex items-center gap-2 flex-wrap">{children}</ul>;
}
