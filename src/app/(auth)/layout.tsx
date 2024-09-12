import Header from "@/components/ui/Header";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "ETRM",
  description: "Energy Trading and Risk Management Systems by NRG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
      {children}
    </>
  );
}
