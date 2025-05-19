import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Building } from "lucide-react"
import Link from "next/link"

export default function QuemSomos() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#223057] text-white py-12">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Quem Somos</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Conheça a Super SP Telecom, seu hub oficial de telefonia e internet no Brasil.
          </p>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#223057] mb-6">Nossa História</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                A Super SP Telecom nasceu com o propósito de levar soluções de telecomunicação de qualidade para
                empresas de todos os tamanhos. Como parceiros oficiais das maiores operadoras do Brasil, oferecemos
                atendimento personalizado e serviços de excelência.
              </p>
              <p>
                Com uma equipe qualificada e comprometida, construímos uma reputação sólida baseada na confiança,
                resultado e satisfação de clientes, parceiros e colaboradores.
              </p>
              <p>
                Ao longo dos anos, nos tornamos especialistas em entender as necessidades específicas de cada empresa e
                oferecer as melhores soluções em telecomunicações, sempre com transparência e agilidade.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/imgs/campaign-creators-gMsnXqILjp4-unsplash.jpg"
              alt="Nossa história"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#223057] mb-12">Missão, Visão e Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#fbfbfb] p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#DEA730]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#223057] mb-4">Missão</h3>
              <p className="text-gray-600 text-center">
                Oferecer soluções inteligentes em telecomunicações, garantindo a melhor experiência para nossos clientes
                com transparência, agilidade e excelência no atendimento.
              </p>
            </div>

            <div className="bg-[#fbfbfb] p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Building className="h-8 w-8 text-[#DEA730]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#223057] mb-4">Visão</h3>
              <p className="text-gray-600 text-center">
                Ser reconhecida como a melhor e mais confiável empresa de soluções em telecomunicações do Brasil,
                referência em atendimento e satisfação do cliente.
              </p>
            </div>

            <div className="bg-[#fbfbfb] p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#DEA730]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#223057] mb-4">Valores</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-[#DEA730] flex-shrink-0" />
                  <span>Transparência em todas as relações</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-[#DEA730] flex-shrink-0" />
                  <span>Compromisso com a satisfação do cliente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-[#DEA730] flex-shrink-0" />
                  <span>Agilidade e eficiência</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-[#DEA730] flex-shrink-0" />
                  <span>Ética e responsabilidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-[#DEA730] flex-shrink-0" />
                  <span>Inovação constante</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Parceiros */}
      <section className="py-16 bg-[#fbfbfb]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#223057] mb-12">Nossos Parceiros</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <Image
                src="/imgs/logovivo.png"
                alt="Logo Parceiro"
                width={120}
                height={60}
                className="max-h-12 w-auto"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <Image
                src="/imgs/logoclaro.png"
                alt="Logo Parceiro"
                width={120}
                height={60}
                className="max-h-12 w-auto"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <Image
                src="/imgs/logotim.jpg"
                alt="Logo Parceiro"
                width={120}
                height={60}
                className="max-h-12 w-auto"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <Image
                src="/imgs/Logo_Algar.png"
                alt="Logo Parceiro"
                width={120}
                height={60}
                className="max-h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#DEA730]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Quer fazer parte da nossa história?</h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8">
            Entre em contato conosco ou conheça nossas oportunidades de trabalho.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contato">
              <Button className="bg-[#223057] hover:bg-[#1a2545] text-white text-lg px-6 py-6 cursor-pointer">Fale Conosco</Button>
            </Link>
            <Link href="/trabalhe-conosco">
              <Button className="bg-[#fbfbfb] hover:bg-gray-100 text-[#223057] text-lg px-6 py-6 cursor-pointer">Trabalhe Conosco</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
