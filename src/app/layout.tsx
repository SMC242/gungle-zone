import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: 'The Gungle Zone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
