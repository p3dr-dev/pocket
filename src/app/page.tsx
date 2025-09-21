'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Inscrição realizada com sucesso! Entraremos em contato.');
        setEmail('');
        setIsModalOpen(false);
      } else {
        alert('Ocorreu um erro. Tente novamente.');
      }
    } catch {
      alert('Ocorreu um erro de conexão.');
    }
  };
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <header className="w-full px-8 py-4 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            SeuLogo
          </div>

          {/* Links de Navegação */}
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Funcionalidades</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Preços</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-grow">
        {/* SEÇÃO HERO */}
        <section className="text-center px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            O mapa completo da sua vida financeira.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Conecte suas contas, investimentos e dívidas para ter clareza e controle total sobre seu dinheiro.
          </p>

          <div className="mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Entrar na lista de espera
            </button>
          </div>
        </section>

        {/* SEÇÃO DE FUNCIONALIDADES */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="container mx-auto">
            {/* Título da Seção */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Tudo que você precisa, em um só lugar
            </h2>

            {/* Grid de Funcionalidades */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

              {/* Feature 1 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mx-auto mb-4">
                  {/* Ícone (SVG simples) */}
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Conexão Automática</h3>
                <p className="text-gray-600">Conecte todos os seus bancos e cartões em segundos com a segurança do Open Finance.</p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mx-auto mb-4">
                   {/* Ícone (SVG simples) */}
                   <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Relatórios Inteligentes</h3>
                <p className="text-gray-600">Nossa IA analisa seus gastos e investimentos, mostrando onde você pode economizar e ganhar mais.</p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mx-auto mb-4">
                   {/* Ícone (SVG simples) */}
                   <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Impostos Simplificados</h3>
                <p className="text-gray-600">Consolide informações para sua declaração de imposto de renda com apenas alguns cliques.</p>
              </div>

            </div>
          </div>
        </section>

        {/* SEÇÃO DE DEPOIMENTOS */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            {/* Título da Seção */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              O que nossos primeiros usuários dizem
            </h2>

            {/* Grid de Depoimentos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* Depoimento 1 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-6">&ldquo;Finalmente uma plataforma que entende a complexidade da vida financeira de um autônomo. A integração para o imposto de renda me economizou horas de trabalho!&rdquo;</p>
                <div className="flex items-center">
                  <Image
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Foto de Ana Paula"
                    width={48}
                    height={48}
                  />
                  <div className="ml-4">
                    <p className="font-bold text-gray-800">Ana Paula</p>
                    <p className="text-sm text-gray-500">Designer Freelancer</p>
                  </div>
                </div>
              </div>

              {/* Depoimento 2 */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-6">&ldquo;Ter a visão consolidada dos meus investimentos em ações e criptomoedas no mesmo lugar que meu extrato bancário é simplesmente revolucionário. Recomendo!&rdquo;</p>
                <div className="flex items-center">
                  <Image
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Foto de Carlos Silva"
                    width={48}
                    height={48}
                  />
                  <div className="ml-4">
                    <p className="font-bold text-gray-800">Carlos Silva</p>
                    <p className="text-sm text-gray-500">Desenvolvedor de Software</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE CTA FINAL */}
        <section className="bg-blue-600">
          <div className="container mx-auto text-center py-16 px-4">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para assumir o controle?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Junte-se a milhares de usuários que estão transformando sua vida financeira.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Entrar na lista de espera
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.</p>
      </footer>

      {/* Modal de Inscrição */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Entre na lista de espera</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
            </div>
            <p className="text-gray-600 mb-6">Seja o primeiro a saber quando lançarmos. Deixe seu e-mail abaixo.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="seu.email@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Quero meu acesso!
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
