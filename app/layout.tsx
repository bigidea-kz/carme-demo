import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/shared";

// import localFont from "next/font/local";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

import { Montserrat, Inter } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat'
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "Carme",
  description: "Аренда авто с последующим выкупом - выгоднее чем автокредит в банке",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon_light.svg",
        href: "/favicon_light.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon_dark.svg",
        href: "/favicon_dark.svg"
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <body
        className={`${montserrat.variable} ${inter.variable} font-montserrat text-blue-950 antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
