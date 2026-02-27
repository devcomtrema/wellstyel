import React from 'react';

const Acessibilidade: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-6">Declaração de Acessibilidade</h1>
      <p className="mb-4">Última atualização: 22 de fevereiro de 2026</p>

      <section className="prose dark:prose-invert max-w-none">
        <h2>Compromisso</h2>
        <p>Nosso objetivo é tornar o site acessível a todas as pessoas, incluindo usuários com deficiências. Trabalhamos para atender às Diretrizes de Acessibilidade para Conteúdo Web (WCAG) na medida do possível.</p>

        <h2>Medidas tomadas</h2>
        <ul>
          <li>Estrutura semântica de HTML e navegação por teclado.</li>
          <li>Contrastes de cores adequados e suporte a leitor de ecrã.</li>
          <li>Texto alternativo em imagens importantes e etiquetas em formulários.</li>
        </ul>

        <h2>Feedback</h2>
        <p>Se encontrar barreiras de acessibilidade, contacte-nos: acessibilidade@exemplo.com</p>
      </section>
    </div>
  );
};

export default Acessibilidade;
