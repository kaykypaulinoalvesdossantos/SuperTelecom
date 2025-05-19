//@next/next/no-img-element

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wifi, Smartphone, Globe, Sun, Server, CheckCircle, Zap, FileText, Users, Award } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#223057] text-white">
        <div className="container grid md:grid-cols-2 gap-8 py-12 md:py-20">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Seu Hub Oficial de Telefonia e Internet no Brasil
            </h1>
            <p className="text-xl font-medium">Todas as Operadoras em Um Só Lugar!</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contato">
                <Button className="bg-[#DEA730] hover:bg-[#c99528] text-white font-medium text-lg px-6 py-6">
                  Solicitar Cotação
                </Button>
              </Link>
              <Link
                href="https://wa.me/5511937221256"
                target="_blank"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WhatsApp
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/imgs/cherrydeck-rMILC1PIwM0-unsplash.jpg"
              alt="Soluções de telecomunicações para empresas"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#223057] mb-4">Quem Somos</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              A Super SP Telecom é um escritório especializado em soluções inteligentes de telefonia e internet.
              Trabalhamos com as principais operadoras do país para oferecer, de forma ágil e transparente, os planos
              mais vantajosos para empresas de todos os portes.
            </p>
            <div className="flex justify-center">
              <Image
                src="/imgs/campaign-creators-gMsnXqILjp4-unsplash.jpg"
                alt="Equipe Super SP Telecom"
                width={600}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-6">
              <Link
                href="/quem-somos"
                className="inline-flex items-center text-[#223057] font-medium hover:text-[#DEA730] transition-colors"
              >
                Conheça nossa história <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nossas Soluções Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#223057] mb-12">Nossas Soluções</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Banda Larga */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#223057]/10 rounded-full flex items-center justify-center">
                  <Wifi className="h-8 w-8 text-[#223057]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#223057] mb-4">Banda Larga Empresarial</h3>
              <p className="text-gray-600 text-center mb-6">
                Internet de alta velocidade com fibra óptica para sua empresa, garantindo estabilidade e performance.
              </p>
              <div className="text-center">
                <Link href="/solucoes" className="text-[#DEA730] font-medium inline-flex items-center hover:underline">
                  Saiba mais <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Linha Móvel */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#223057]/10 rounded-full flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-[#223057]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#223057] mb-4">Linha Móvel Corporativa</h3>
              <p className="text-gray-600 text-center mb-6">
                Planos corporativos com as melhores operadoras, oferecendo cobertura nacional e benefícios exclusivos.
              </p>
              <div className="text-center">
                <Link href="/solucoes" className="text-[#DEA730] font-medium inline-flex items-center hover:underline">
                  Saiba mais <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Link Dedicado */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#223057]/10 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-[#223057]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#223057] mb-4">Link Dedicado</h3>
              <p className="text-gray-600 text-center mb-6">
                Conexão exclusiva com IP fixo, garantindo alta disponibilidade e velocidade simétrica para sua empresa.
              </p>
              <div className="text-center">
                <Link href="/solucoes" className="text-[#DEA730] font-medium inline-flex items-center hover:underline">
                  Saiba mais <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* PABX em Nuvem */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#223057]/10 rounded-full flex items-center justify-center">
                  <Server className="h-8 w-8 text-[#223057]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#223057] mb-4">PABX em Nuvem</h3>
              <p className="text-gray-600 text-center mb-6">
                Centralize sua comunicação com uma solução moderna e flexível, sem investimento em hardware.
              </p>
              <div className="text-center">
                <Link href="/solucoes" className="text-[#DEA730] font-medium inline-flex items-center hover:underline">
                  Saiba mais <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            {/* Energia Solar */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#223057]/10 rounded-full flex items-center justify-center">
                  <Sun className="h-8 w-8 text-[#223057]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#223057] mb-4">Energia Solar para Empresas</h3>
              <p className="text-gray-600 text-center mb-6">
                Reduza custos e contribua para a sustentabilidade com nossa solução de energia solar compartilhada.
              </p>
              <div className="text-center">
                <Link href="/solucoes" className="text-[#DEA730] font-medium inline-flex items-center hover:underline">
                  Saiba mais <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/solucoes">
              <Button className="bg-[#223057] hover:bg-[#1a2545] text-white cursor-pointer">Ver todas as soluções</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#223057] mb-12">Diferenciais que Geram Confiança</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#DEA730]/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-[#DEA730]" />
              </div>
              <h3 className="text-xl font-bold text-[#223057] mb-2">Agilidade Real</h3>
              <p className="text-gray-600">
                Atendimento rápido e resolutivo via WhatsApp, e-mail ou presencial. Soluções em horas, não dias.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#DEA730]/20 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-[#DEA730]" />
              </div>
              <h3 className="text-xl font-bold text-[#223057] mb-2">Transparência Total</h3>
              <p className="text-gray-600">Comparação imparcial de ofertas. Tudo claro, sem letras miúdas.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#DEA730]/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-[#DEA730]" />
              </div>
              <h3 className="text-xl font-bold text-[#223057] mb-2">Competência Comprovada</h3>
              <p className="text-gray-600">Equipe técnica e comercial com consultoria gratuita.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#DEA730]/20 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-[#DEA730]" />
              </div>
              <h3 className="text-xl font-bold text-[#223057] mb-2">Melhores Ofertas do Brasil</h3>
              <p className="text-gray-600">Acesso direto a planos atualizados de Claro, Vivo, TIM, Algar e GoTo.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-[#DEA730]/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-[#DEA730]" />
              </div>
              <h3 className="text-xl font-bold text-[#223057] mb-2">Atendimento Pós-Venda Ativo</h3>
              <p className="text-gray-600">Acompanhamento constante da conta com foco em otimizações.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#DEA730]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para transformar sua conectividade?</h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8">
            Entre em contato com nossa equipe e descubra como podemos ajudar sua empresa a ter a melhor experiência em
            telecomunicações.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contato">
              <Button className="bg-[#223057] hover:bg-[#1a2545] text-white text-lg px-6 py-6 cursor-pointer">
                Solicitar Cotação
              </Button>
            </Link>
            <Link
              href="https://wa.me/5511937221256"
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium text-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Fale pelo WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
