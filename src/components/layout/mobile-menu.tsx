"use client"
//@next/next/no-img-element
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <button className="md:hidden text-indigo-900" onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <div className="absolute inset-0 bg-indigo-700 rounded-md"></div>
                  <div className="absolute inset-0 border-r-4 border-lime-400 rounded-md"></div>
                </div>
                <span className="text-indigo-700 font-bold">ACC TELECOM</span>
              </div>
              <button className="text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-auto py-4">
              <ul className="space-y-2 px-4">
                <li>
                  <Link
                    href="/"
                    className={`block py-2 px-4 rounded-md ${pathname === "/" ? "bg-indigo-50 text-indigo-700 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre"
                    className={`block py-2 px-4 rounded-md ${pathname === "/sobre" ? "bg-indigo-50 text-indigo-700 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solucoes"
                    className={`block py-2 px-4 rounded-md ${pathname === "/solucoes" ? "bg-indigo-50 text-indigo-700 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Soluções
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trabalhe-conosco"
                    className={`block py-2 px-4 rounded-md ${pathname === "/trabalhe-conosco" ? "bg-indigo-50 text-indigo-700 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Trabalhe Conosco
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    className={`block py-2 px-4 rounded-md ${pathname === "/contato" ? "bg-indigo-50 text-indigo-700 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="p-4 border-t">
              <Link
                href="/contato"
                className="block w-full py-2 px-4 bg-indigo-800 text-white text-center rounded-md hover:bg-indigo-900"
                onClick={() => setIsOpen(false)}
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
