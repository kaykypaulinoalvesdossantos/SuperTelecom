"use client"


import { Button } from "@/components/ui/button"
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function Contato() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#223057] text-white py-12">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Estamos prontos para atender você e oferecer as melhores soluções em telecomunicações para sua empresa.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#223057] mb-6">Envie uma Mensagem</h2>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
                // Aqui você adicionaria a lógica para enviar o formulário
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nome" className="block font-medium text-gray-700">
                    Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nome"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#223057]"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium text-gray-700">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#223057]"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="telefone" className="block font-medium text-gray-700">
                    Telefone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="telefone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#223057]"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="assunto" className="block font-medium text-gray-700">
                    Assunto <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="assunto"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#223057]"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="comercial">Informações Comerciais</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="mensagem" className="block font-medium text-gray-700">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="mensagem"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#223057] min-h-[150px]"
                  placeholder="Como podemos ajudar sua empresa?"
                  required
                ></textarea>
              </div>
              <div>
                <Button className="bg-[#223057] hover:bg-[#1a2545] text-white cursor-pointer">Enviar Mensagem</Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#223057] mb-6">Informações de Contato</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <PhoneCall className="h-5 w-5 text-[#DEA730]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#223057] mb-1">Telefone</h3>
                  <p className="text-gray-700">(11) 2362-9665</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#DEA730]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#223057] mb-1">E-mail</h3>
                  <p className="text-gray-700">contato@supersptelecom.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#DEA730]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#223057] mb-1">Endereço</h3>
                  <p className="text-gray-700">
                    Av. Paulista, 1000 - Bela Vista
                    <br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#DEA730]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#223057] mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-700">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-[#223057] mb-4">Nossa Localização</h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  className="w-full h-[400px]" 
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Rua%20Alfredo%20Pujol,%20545%20S%C3%A3o%20Paulo+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="https://wa.me/5511937221256"
                target="_blank"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Fale pelo WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#223057] mb-12">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#223057] mb-2">Como solicitar uma cotação?</h3>
              <p className="text-gray-700">
                Você pode solicitar uma cotação através do formulário de contato, pelo WhatsApp ou ligando diretamente
                para nosso número. Nossa equipe retornará em até 2 horas úteis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#223057] mb-2">Quais operadoras vocês trabalham?</h3>
              <p className="text-gray-700">
                Trabalhamos com as principais operadoras do Brasil, incluindo Claro, Vivo, TIM, Algar e GoTo, oferecendo
                sempre a melhor opção para cada necessidade.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#223057] mb-2">Quanto tempo leva para instalar os serviços?</h3>
              <p className="text-gray-700">
                O prazo de instalação varia conforme o serviço contratado e a região. Normalmente, serviços de banda
                larga são instalados em até 15 dias úteis, enquanto linhas móveis podem ser ativadas em até 48 horas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#223057] mb-2">Como funciona o suporte técnico?</h3>
              <p className="text-gray-700">
                Oferecemos suporte técnico especializado por telefone, e-mail e WhatsApp durante nosso horário
                comercial. Para clientes empresariais com planos específicos, disponibilizamos suporte 24/7.
              </p>
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
          <Button
            className="bg-[#223057] hover:bg-[#1a2545] text-white text-lg px-6 py-6 cursor-pointer"
            onClick={() => {
              // Rolar para o formulário de contato
              document.querySelector("form")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Solicitar Cotação
          </Button>
        </div>
      </section>
    </>
  )
}
