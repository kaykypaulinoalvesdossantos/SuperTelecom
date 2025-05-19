import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppButton from "@/components/layout/whatsapp-button"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Super SP Telecom - Soluções em Telecomunicações",
  description: "Seu Hub Oficial de Telefonia e Internet no Brasil – Todas as Operadoras em Um Só Lugar!",
  keywords: "telecom, internet, telefonia, banda larga, fibra óptica, link dedicado, pabx em nuvem, energia solar",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false} disableTransitionOnChange storageKey="supertelecom-theme">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
