export default function FormWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="border border-gray-300 rounded-md h-fit w-full min-h-60 md:w-150">
      {children}
    </section>
  );
}
