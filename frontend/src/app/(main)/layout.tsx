import React from "react";
import Navbar from "@/components/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col min-w-0">
        {children}
      </main>
    </>
  );
}
