import React from 'react';

const PrivacidadeSaudeWhatsapp: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacidade de Saúde — Comunicação via WhatsApp</h1>
      <p className="mb-4">Última atualização: 22 de fevereiro de 2026</p>

      <section className="prose dark:prose-invert max-w-none">
        <h2>Escopo</h2>
        <p>Esta política descreve como tratamos informações relacionadas à saúde que você possa compartilhar conosco via WhatsApp. Informações de saúde são consideradas dados sensíveis e recebem tratamento especial.</p>

        <h2>Consentimento</h2>
        <p>Antes de solicitar ou enviar qualquer dado de saúde via WhatsApp, solicitaremos seu consentimento explícito.</p>

        <h2>Armazenamento e segurança</h2>
        <p>Mensagens recebidas via WhatsApp podem ser armazenadas em provedores terceiros. Implementamos medidas técnicas e organizacionais adequadas para proteger estes dados.</p>

        <h2>Contact</h2>
        <p>Dúvidas ou solicitações: suporte@exemplo.com</p>
      </section>
    </div>
  );
};

export default PrivacidadeSaudeWhatsapp;
