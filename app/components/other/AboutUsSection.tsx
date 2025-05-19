export default function AboutUsSectionWrapper({
  children,
  customStyle,
}: {
  children: React.ReactNode;
  customStyle: string;
}) {
  return (
    <section
      className={`w-full p-4 lg:h-110 flex items-center justify-between gap-10 lg:gap-0 lg:flex-row ${customStyle}`}
    >
      {children}
    </section>
  );
}