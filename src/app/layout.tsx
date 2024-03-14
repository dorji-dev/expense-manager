import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../stylesheets/styles.scss";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

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
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <SiteHeader />
          <div className="container grow my-[30px] md:mx-auto lg:w-[80%]">
            {children}
          </div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
