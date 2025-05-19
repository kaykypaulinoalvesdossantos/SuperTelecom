"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Building, Upload } from "lucide-react"

export default function TrabalheConosco() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#223057] text-white py-12">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Trabalhe Conosco</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Faça parte da nossa equipe e ajude-nos a transformar a experiência em telecomunicações dos nossos clientes.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#223057] mb-4">Por que trabalhar na Super SP Telecom?</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Na Super SP Telecom, valorizamos nossos colaboradores e oferecemos um ambiente de trabalho dinâmico,
            colaborativo e com oportunidades de crescimento profissional.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#DEA730]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#223057] mb-2">Desenvolvimento Profissional</h3>
              <p className="text-gray-600 text-center">
                Investimos no crescimento e capacitação dos nossos colaboradores com treinamentos e oportunidades de
                aprendizado contínuo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#DEA730]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#223057] mb-2">Ambiente Colaborativo</h3>
              <p className="text-gray-600 text-center">
                Trabalhamos em equipe e valorizamos a contribuição de cada um, promovendo um ambiente de respeito e
                colaboração.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <Building className="h-8 w-8 text-[#DEA730]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#223057] mb-2">Inovação Constante</h3>
              <p className="text-gray-600 text-center">
                Buscamos sempre as melhores soluções e tecnologias para nossos clientes, incentivando a criatividade e
                inovação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#DEA730]/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-[#DEA730]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#223057] mb-2">Reconhecimento</h3>
              <p className="text-gray-600 text-center">
                Valorizamos e reconhecemos o trabalho e dedicação dos nossos colaboradores com programas de incentivo e
                benefícios.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Application Form Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#223057] mb-12">Envie seu currículo</h2>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Currículo enviado com sucesso! Analisaremos seu perfil e entraremos em contato.")
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
                    placeholder="Seu nome completo"
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
                  <label htmlFor="area" className="block font-medium text-gray-700">
                    Área de Interesse <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="area"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#223057]"
                    required
                  >
                    <option value="">Selecione uma área</option>
                    <option value="comercial">Comercial</option>
                    <option value="tecnico">Técnico</option>
                    <option value="administrativo">Administrativo</option>
                    <option value="marketing">Marketing</option>
                    <option value="ti">TI</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensagem" className="block font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#223057] min-h-[150px]"
                  placeholder="Conte-nos um pouco sobre você e sua experiência profissional..."
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="block font-medium text-gray-700">
                  Currículo (PDF, DOC ou DOCX) <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex justify-center mb-2">
                    <Upload className="h-10 w-10 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Clique para selecionar seu currículo</p>
                  <p className="text-xs text-gray-500">Tamanho máximo: 5MB</p>
                  <input type="file" className="hidden" id="curriculo" accept=".pdf,.doc,.docx" required />
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full md:w-auto bg-[#223057] hover:bg-[#1a2545] text-white px-8 py-3 cursor-pointer">
                  Enviar Currículo
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#DEA730]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para fazer parte do nosso time?</h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8">
            Envie seu currículo e venha fazer parte de uma empresa que valoriza o talento e oferece oportunidades de
            crescimento.
          </p>
          <Button
            className="bg-[#223057] hover:bg-[#1a2545] text-white text-lg px-6 py-6 cursor-pointer"
            onClick={() => {
              // Rolar para o formulário de envio de currículo
              document.querySelector("form")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Enviar Currículo
          </Button>
        </div>
      </section>
    </>
  )
}
