import type { ReactNode } from "react";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <main className="flex-col flex gap-10    mt-30 md:mt-25 mb-10 px-4 md:px-40 min-h-screen w-full items-center">
      {children}
    </main>
  );
}
