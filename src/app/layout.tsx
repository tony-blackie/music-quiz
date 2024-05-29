import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-auto">
      <body
        className={`${inter.className} w-full h-full flex justify-center items-center bg-gradient-to-r from-mango-200 via-mango-500 to-mango-700  overflow-auto`}
      >
        {children}
      </body>
    </html>
  );
}
