export default function AuthFormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-25 mb-10 flex-col md:mt-25 w-full min-h-screen flex  lg:flex-col items-center gap-2 px-5 md:px-40 ">
      {children}
    </main>
  );
}
