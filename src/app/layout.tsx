import type { Metadata } from "next";
import "./globals.css";
import {Major_Mono_Display, Inter} from 'next/font/google'

const mnDisplayFont = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400"
})

const interFont = Inter({
  subsets: ["latin"],
  weight: "300"
})

export const metadata: Metadata = {
  title: "Erick Nunes",
  description: "Web developer and web designer Erick Nunes professional portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`antialiased overflow-x-hidden w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
