//@next/next/no-img-element

import Link from "next/link"
import { PhoneCall, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#223057] text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Link href="/" className="flex items-center gap-2 z-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/imgs/logobranca.png" 
                  alt="Logo" 
                  className="h-12 w-auto object-contain"
                  style={{ maxHeight: '48px' }}
                />
              </Link>
            </div>

            <p className="text-sm mb-4">
              Seu hub oficial de telefonia e internet no Brasil. Parceiros oficiais das maiores operadoras, oferecendo
              soluções inteligentes para empresas de todos os portes.
            </p>
            <p className="text-sm mb-4">CNPJ: 11.674.391/0001-46</p>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-[#DEA730] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#DEA730] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-[#DEA730] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quem-somos" className="text-white hover:text-[#DEA730] transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/solucoes" className="text-white hover:text-[#DEA730] transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="/trabalhe-conosco" className="text-white hover:text-[#DEA730] transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-white hover:text-[#DEA730] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <PhoneCall className="h-5 w-5 mt-0.5 text-[#DEA730]" />
                <span>(11) 93722-1256</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 text-[#DEA730]" />
                <span>tbs@supersp.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 text-[#DEA730]" />
                <span>R. Alfredo Pujol, 545 - Santana São Paulo - SP, 02017-010</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#2d3e6d] mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Super SP Telecom. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
