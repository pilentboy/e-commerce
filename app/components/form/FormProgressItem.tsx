interface ProgressItem {
  title: string;
  icon: React.ReactNode;
  iconOpacity: string;
}
export default function FormProgressItem({
  title,
  icon,
  iconOpacity,
}: ProgressItem) {
  return (
    <div className="flex flex-col items-center gap-2">
      <i className={`text-primary ${iconOpacity}`}>{icon}</i>
      <span className="text-primary text-center text-[8px] md:text-[12px]">
        {title}
      </span>
    </div>
  );
}
