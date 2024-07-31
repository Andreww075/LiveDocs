import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: "LiveDocs",
  description: "Collaborative editor coded with NextJs, Typescript, Tailwind and other technologies so Clerk...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >{children}</body>
    </html>
  );
}
