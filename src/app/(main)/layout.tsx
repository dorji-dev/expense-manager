import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../stylesheets/styles.scss';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { AuthProvider } from "../../components/providers/auth-provider";
import AuthRedirect from "@/components/auth-redirect";
import { Toaster } from "../../components/ui/toaster";

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
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <AuthRedirect>
            <div className='flex flex-col'>
              <SiteHeader />
              <div className='container grow my-[30px] md:mx-auto lg:w-[80%]'>
                {children}
                <Toaster />
              </div>
              <SiteFooter />
            </div>
          </AuthRedirect>
        </AuthProvider>
      </body>
    </html>
  );
}
