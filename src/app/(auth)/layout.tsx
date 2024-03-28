import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../stylesheets/styles.scss';
import { AuthProvider } from "../../components/providers/auth-provider";
import AuthRedirect from "@/components/auth-redirect";
import { Toaster } from "../../components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth",
  description:
    "Easily track and manage your personal or business expenses with our intuitive and feature-rich expense manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <AuthProvider>
          <AuthRedirect>
            {children}
            <Toaster />
          </AuthRedirect>
        </AuthProvider>
      </body>
    </html>
  );
}
