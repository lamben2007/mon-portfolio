import Link from "next/link";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import Header from "./components/Header";


//
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

//
export const metadata = {
  title: "Mon Portfolio",
  description: "Portfolio personnel créé avec Next.js et Tailwind CSS",
};


//
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} bg-white text-gray-800`}>

        <Header />

        <main className="min-h-screen p-8 pt-18">{children}</main>

        <Footer />

      </body>
    </html>
  );
}
