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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-gradient-to-br from-purple-900 to-yellow">
        <header className="absolute top-0 left-0 flex w-full border p-3 border-slate-400 bg-green">
          <div className="bg-black">
            <a href="/">
              <Image
                src="/gungle-zone-tree.png"
                alt="Our logo"
                width={50}
                height={50}
              />
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
