import React from 'react';

const TermosECondicoes: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-6">Termos e Condições</h1>
      <p className="mb-4">Última atualização: 22 de fevereiro de 2026</p>

      <section className="prose dark:prose-invert max-w-none">
        <h2>1. Aceitação dos Termos</h2>
        <p>Ao aceder e usar este site, você aceita cumprir estes Termos e Condições. Se não concordar, por favor não utilize o serviço.</p>

        <h2>2. Serviços</h2>
        <p>O site oferece informações, produtos e/ou serviços conforme descrito nas páginas específicas.</p>

        <h2>3. Conta de Utilizador</h2>
        <p>Quando aplicável, o usuário é responsável pela veracidade das informações de conta, senha e por manter a confidencialidade.</p>

        <h2>7. Limitação de Responsabilidade</h2>
        <p>Na máxima extensão permitida por lei, a empresa não será responsável por danos indiretos, especiais ou consequenciais relacionados ao uso do site.</p>

        <h2>Contact</h2>
        <p>Questões: suporte@exemplo.com</p>
      </section>
    </div>
  );
};

export default TermosECondicoes;
