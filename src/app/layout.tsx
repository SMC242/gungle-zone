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
    <html lang="en" className="bg-black text-white">
      <body className="bg-gradient-to-br from-purple-900 to-yellow">
        <header className="absolute top-0 left-0 flex w-full border p-3 border-slate-400 bg-green">
          <a href="/">
            <Image src="/logo.png" alt="Our logo" width={50} height={50} />
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
