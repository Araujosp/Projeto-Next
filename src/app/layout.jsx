import { Geist, Geist_Mono } from "next/font/google";
import styles from "./page.module.css"
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Minha primeiar aplicação NEXT",
  description: "aprendendo ecossistema react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>  
      <header className="header">
              <img src="/img/AWS.png" className="imgLogo" alt="AWS"/>
              <nav className="menu">
                <ul>
                  <li> <Link href = {"/sobre/empresa"}>Product</Link></li>
                  <li>Pricing</li>
                  <li><Link href = {"/"}>Página Inicial</Link></li>
                  <li><Link href = {"/sobre"}> Sobre AWS </Link> </li>
                  <li>Learn</li>
                </ul>
              </nav>
              <div className="botoes">
                <p className="btn2">Log In</p>
                <p className="btn">Start My Free Trial</p>
              </div>
            </header>

        {children}
      
        
        </body> 
    </html>
  );
}
