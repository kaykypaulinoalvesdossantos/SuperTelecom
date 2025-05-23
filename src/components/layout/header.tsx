"use client"
//@next/next/no-img-element

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMediumScreen, setIsMediumScreen] = useState(false)

  // Detectar tamanho de tela para ajustar o menu
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth < 1024)
    }

    // Verificar no carregamento inicial
    checkScreenSize()

    // Adicionar listener para redimensionamento
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 z-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/imgs/logo.png" 
                alt="Logo" 
                className="h-12 w-auto object-contain"
                style={{ maxHeight: '48px' }}
              />
            </Link>
          </div>

          {/* Navigation - Right Side */}
          <div className="flex items-center">
            {/* Desktop Navigation - Apenas para telas grandes (lg) */}
            <nav className="hidden lg:flex items-center space-x-4 mr-4">
              <Link
                href="/sobre"
                className={`${pathname === "/sobre" ? "text-[#DEA730] font-medium" : "text-[#223057]"} hover:text-[#DEA730] transition-colors text-sm whitespace-nowrap px-2 cursor-pointer`}
              >
                Quem Somos
              </Link>
              <Link
                href="/solucoes"
                className={`${pathname === "/solucoes" ? "text-[#DEA730] font-medium" : "text-[#223057]"} hover:text-[#DEA730] transition-colors text-sm whitespace-nowrap px-2 cursor-pointer`}
              >
                Soluções
              </Link>
              <Link
                href="/trabalhe-conosco"
                className={`${pathname === "/trabalhe-conosco" ? "text-[#DEA730] font-medium" : "text-[#223057]"} hover:text-[#DEA730] transition-colors text-sm whitespace-nowrap px-2 cursor-pointer`}
              >
                Trabalhe Conosco
              </Link>
              <Link
                href="/contato"
                className={`${pathname === "/contato" ? "text-[#DEA730] font-medium" : "text-[#223057]"} hover:text-[#DEA730] transition-colors text-sm whitespace-nowrap px-2 cursor-pointer`}
              >
                Contato
              </Link>
            </nav>

            {/* Desktop Action Buttons - Apenas para telas grandes (lg) */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="https://wa.me/5511937221256"
                target="_blank"
                className="flex items-center gap-1 text-[#223057] hover:text-[#DEA730] transition-colors whitespace-nowrap text-sm cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span className="font-medium">WhatsApp</span>
              </Link>
              <Link href="/contato">
                <Button className="bg-[#DEA730] hover:bg-[#c99528] text-white whitespace-nowrap text-sm py-1 h-auto cursor-pointer">
                  Solicitar Cotação
                </Button>
              </Link>
            </div>

            {/* Menu Button para telas médias e pequenas */}
            <button
              className="lg:hidden text-[#223057] z-20 ml-4 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile e Tablet */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl flex flex-col transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex-1 overflow-auto py-8 px-4">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/quem-somos"
                className={`py-3 px-4 rounded-md ${pathname === "/quem-somos" ? "bg-[#223057]/10 text-[#DEA730] font-medium" : "text-[#223057] hover:bg-gray-50"} cursor-pointer`}
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                href="/solucoes"
                className={`py-3 px-4 rounded-md ${pathname === "/solucoes" ? "bg-[#223057]/10 text-[#DEA730] font-medium" : "text-[#223057] hover:bg-gray-50"} cursor-pointer`}
                onClick={() => setIsMenuOpen(false)}
              >
                Soluções
              </Link>
              <Link
                href="/trabalhe-conosco"
                className={`py-3 px-4 rounded-md ${pathname === "/trabalhe-conosco" ? "bg-[#223057]/10 text-[#DEA730] font-medium" : "text-[#223057] hover:bg-gray-50"} cursor-pointer`}
                onClick={() => setIsMenuOpen(false)}
              >
                Trabalhe Conosco
              </Link>
              <Link
                href="/contato"
                className={`py-3 px-4 rounded-md ${pathname === "/contato" ? "bg-[#223057]/10 text-[#DEA730] font-medium" : "text-[#223057] hover:bg-gray-50"} cursor-pointer`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </nav>
          </div>
          <div className="p-4 border-t space-y-4">
            <Link
              href="https://wa.me/5511937221256"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 w-full cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp
            </Link>
            <Link href="/contato" className="block w-full" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-[#DEA730] hover:bg-[#c99528] text-white py-6 cursor-pointer">Solicitar Cotação</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
