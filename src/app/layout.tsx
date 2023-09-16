import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "The Gungle Zone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-purple">
      <body className=" text-red-600">
        <header className="absolute top-0 left-0 flex w-full border border-gray-200">
          <span className="text-yellow-400">Hello</span>
          <a href="/">
            {/* <Image src="/logo.png" alt="Our logo" width={50} height={50} /> */}
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
