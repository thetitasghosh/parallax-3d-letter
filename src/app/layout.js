import { Inter } from "next/font/google";
import LenisScroll from "@/components/LenisScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "parallax-3d-letters",
  description: "Created  by Titas Ghosh | Creative Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LenisScroll>
          {children}
        </LenisScroll>
      </body>
    </html>
  );
}
