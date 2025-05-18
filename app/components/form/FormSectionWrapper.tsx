export default function FormSectionWrapper({
  children,
  customStyle,
}: {
  children: React.ReactNode;
  customStyle: string;
}) {
  const baseStyle = "flex items-center  lg:flex-row";
  const finalStyle = baseStyle + " " + customStyle;
  return <section className={finalStyle}>{children}</section>;
}
