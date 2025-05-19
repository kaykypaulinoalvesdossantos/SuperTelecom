
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Wifi,
  Smartphone,
  Globe,
  Sun,
  Server,
  CheckCircle,
} from "lucide-react"

export default function Solucoes() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#223057] text-white py-12">
          <div className="container text-center">
            <h1 className="text-4xl font-bold mb-4">Nossas Soluções</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Oferecemos um portfólio completo de soluções em telecomunicações para atender às necessidades específicas
              da sua empresa.
            </p>
          </div>
        </section>

        {/* Banda Larga Section */}
        <section className="py-16">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Wifi className="h-6 w-6 text-[#DEA730]" />
                </div>
                <h2 className="text-3xl font-bold text-[#223057]">Banda Larga Empresarial</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Internet fibra óptica com alta velocidade e estabilidade, ideal para residências e empresas que precisam
                de performance e confiabilidade. Trabalhamos com as melhores operadoras do mercado para garantir a
                melhor solução para sua empresa.
              </p>

              <h3 className="text-xl font-bold text-[#223057] mb-4">Benefícios</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Alta velocidade de download e upload</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Estabilidade e baixa latência</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Suporte técnico especializado</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Planos flexíveis para diferentes necessidades</span>
                </li>
              </ul>

              <Link href="/contato">
                <Button className="bg-[#223057] hover:bg-[#1a2545] text-white cursor-pointer">Solicitar Cotação</Button>
              </Link>
            </div>
            <div>
              <Image
                src="/imgs/dimitri-karastelev-pl6My-v7gnE-unsplash.jpg"
                alt="Banda Larga Empresarial"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Linha Móvel Section */}
        <section className="py-16 bg-gray-50">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/imgs/nick-fewings-mz1rMariQ7w-unsplash (1).jpg"
                alt="Linha Móvel Corporativa"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-[#DEA730]" />
                </div>
                <h2 className="text-3xl font-bold text-[#223057]">Linha Móvel Corporativa</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Telefonia móvel com cobertura nacional e planos sob medida para residências e empresas de todos os
                tamanhos. Acesso aos melhores planos de Claro, Vivo, TIM e outras operadoras.
              </p>

              <h3 className="text-xl font-bold text-[#223057] mb-4">Benefícios</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Ampla cobertura nacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Planos corporativos com preços competitivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Gestão centralizada das linhas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Atendimento dedicado 24/7</span>
                </li>
              </ul>

              <Link href="/contato">
                <Button className="bg-[#223057] hover:bg-[#1a2545] text-white cursor-pointer">Solicitar Cotação</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Link Dedicado Section */}
        <section className="py-16">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-[#DEA730]" />
                </div>
                <h2 className="text-3xl font-bold text-[#223057]">Link Dedicado</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Internet exclusiva com alta disponibilidade, IP fixo, suporte 24/7 e velocidade simétrica para sua
                empresa. Ideal para empresas que dependem de conexão estável e de alta performance.
              </p>

              <h3 className="text-xl font-bold text-[#223057] mb-4">Benefícios</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Conexão exclusiva e não compartilhada</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Velocidade simétrica de upload e download</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">IP fixo para serviços que exigem endereço estático</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Suporte técnico 24/7 e SLA garantido</span>
                </li>
              </ul>

              <Link href="/contato">
                <Button className="bg-[#223057] hover:bg-[#1a2545] text-white cursor-pointer">Solicitar Cotação</Button>
              </Link>
            </div>
            <div>
              <Image
                src="/imgs/imgix-klWUhr-wPJ8-unsplash.jpg"
                alt="Link Dedicado"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* PABX em Nuvem Section */}
        <section className="py-16 bg-gray-50">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/imgs/arlington-research-kN_kViDchA0-unsplash.jpg"
                alt="PABX em Nuvem"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Server className="h-6 w-6 text-[#DEA730]" />
                </div>
                <h2 className="text-3xl font-bold text-[#223057]">PABX em Nuvem</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Centralize sua comunicação com uma solução moderna e flexível, sem investimento em hardware. Ideal para
                empresas que buscam modernizar sua telefonia com recursos avançados.
              </p>

              <h3 className="text-xl font-bold text-[#223057] mb-4">Benefícios</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Sem investimento em equipamentos físicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Recursos avançados como URA, filas e gravação de chamadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Escalabilidade conforme o crescimento da empresa</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Integração com sistemas de CRM e ERP</span>
                </li>
              </ul>

              <Link href="/contato">
                <Button className="bg-[#223057] hover:bg-[#1a2545] text-white cursor-pointer">Solicitar Cotação</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Energia Solar Section */}
        <section className="py-16">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Sun className="h-6 w-6 text-[#DEA730]" />
                </div>
                <h2 className="text-3xl font-bold text-[#223057]">Energia Solar para Empresas</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Reduza custos e contribua para a sustentabilidade com nossa solução de energia solar compartilhada. Uma
                solução sustentável que não requer instalação de equipamentos em sua empresa.
              </p>

              <h3 className="text-xl font-bold text-[#223057] mb-4">Benefícios</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Economia de até 20% na conta de energia</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Sem necessidade de instalação de painéis solares</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Solução sustentável e ecologicamente responsável</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#DEA730] flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">Contrato simples e sem burocracia</span>
                </li>
              </ul>

              <Link href="/contato">
                <Button className="bg-[#223057] hover:bg-[#1a2545] text-white cursor-pointer">Solicitar Cotação</Button>
              </Link>
            </div>
            <div>
              <Image
                src="/imgs/american-public-power-association-XGAZzyLzn18-unsplash.jpg"
                 alt="Energia Solar para Empresas"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#DEA730]">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Encontre a solução ideal para sua empresa</h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-8">
              Entre em contato com nossa equipe e descubra como podemos ajudar sua empresa a ter a melhor experiência em
              telecomunicações.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contato">
                <Button className="bg-[#223057] hover:bg-[#1a2545] text-white text-lg px-6 py-6">
                  Solicitar Cotação
                </Button>
              </Link>
              <Link
                href="https://wa.me/5511937221256"
                target="_blank"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Fale pelo WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6">
        <Link
          href="https://wa.me/5511937221256"
          target="_blank"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="sr-only">WhatsApp</span>
        </Link>
      </div>
    </div>
  )
}
