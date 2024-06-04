import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./home.css"
import Header from "./layouts/header";
import Footer from "./layouts/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Losung App",
  description: "Losung App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
