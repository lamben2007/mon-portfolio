import Link from "next/link";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";


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
      <body className={`${poppins.className} bg-white text-gray-800`}   >
        <header className="flex justify-between items-center p-4 bg-white shadow">
          <h1 className="text-xl font-bold">Mon Portfolio</h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:text-blue-600">
              Accueil
            </Link>
            <Link href="/projects" className="hover:text-blue-600">
              Projets
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </nav>
        </header>

        <main className="min-h-screen p-8">{children}</main>


        <footer className="text-center py-6 text-sm text-gray-500 border-t">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
