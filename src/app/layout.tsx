import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "../components/particlesBackground/particlesBackground";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

// Configuração da Orbitron
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron", // Nome da variável CSS
  weight: ["400", "700"],
});

// Configuração da Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${orbitron.variable} ${inter.variable}`}>
      <body>
        <ParticlesBackground></ParticlesBackground>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
