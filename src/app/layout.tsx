import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayout from "../../components/layout/MainLayout";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astrological - Your Personal Astrology Guide",
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
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    // Check system preference
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      document.documentElement.classList.add('dark');
                      localStorage.setItem('theme', 'dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                      localStorage.setItem('theme', 'light');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <Analytics/>
      </head>
      <body suppressHydrationWarning className={`h-full ${inter.className}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
} 
