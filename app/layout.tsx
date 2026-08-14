import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast"

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Adeel Abbas — Frontend Engineer",
  description:
    "Portfolio of Adeel Abbas, a React & Next.js developer crafting fast, elegant, and accessible web experiences.",

  authors: [
    {
      name: "Adeel Abbas",
    },
  ],

  openGraph: {
    title: "Adeel Abbas — Frontend Engineer",
    description:
      "Portfolio of Adeel Abbas, a React & Next.js developer crafting fast, elegant, and accessible web experiences.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}