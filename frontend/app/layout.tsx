import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
const inter = Tajawal({ subsets: ["arabic"], weight: "400" });

export const metadata: Metadata = {
  title: "أعجم",
  description: "يزيل العجمة و الغموض",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="preload"
        href="/../public/fonts/RTL-Romman-Regular.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
