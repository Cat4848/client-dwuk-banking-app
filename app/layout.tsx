import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NavBar from "./lib/common/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DWUK Banking App",
  description: "Author: Catalin Pirtiu: catalinrol@gmail.com"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
