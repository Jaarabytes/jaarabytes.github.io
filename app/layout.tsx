import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


// Add a sticker (Kurapika or One piece)
export const metadata: Metadata = {
  title: "jaarabytes",
  description: "with love, trenches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Add a better sticker tho (from one piece or Kurapika) */}
      <link rel="icon" type="image/svg+xml" href="./src/assets/pirate-skull-svgrepo-com.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
