import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "../../components/layout/MainLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AstroGuide - Your Personal Astrology Guide",
  description: "Discover your cosmic path with personalized astrological insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className={`h-full ${inter.className}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
} 