import React from 'react';
import { useTranslation } from 'react-i18next';

const PoliticaPrivacidade: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
      <p className="mb-4">Última atualização: 22 de fevereiro de 2026</p>

      <section className="prose dark:prose-invert max-w-none">
        <h2>1. Introdução</h2>
        <p>A presente Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os dados pessoais dos visitantes e usuários do site. Ao usar nossos serviços, você concorda com as práticas descritas nesta política.</p>

        <h2>2. Controlador de Dados</h2>
        <ul>
          <li>Responsável: Wellstyel (ou nome da empresa)</li>
          <li>Contacto: suporte@exemplo.com</li>
        </ul>

        <h2>3. Dados que coletamos</h2>
        <p>Dados fornecidos diretamente: nome, e-mail, telefone, endereço, mensagens e informações enviadas via formulários.</p>
        <p>Dados de navegação: IP, tipo de navegador, páginas visitadas, tempo no site, cookies e identificadores de dispositivos.</p>

        <h2>4. Finalidades do tratamento</h2>
        <p>Fornecer e melhorar serviços e funcionalidades do site; responder a pedidos de contacto e suporte; enviar comunicações relacionadas a serviço e marketing (mediante consentimento); cumprir obrigações legais.</p>

        <h2>5. Direitos dos titulares</h2>
        <p>Acesso, retificação, eliminação, limitação, portabilidade e oposição. Para exercer direitos, contacte suporte@exemplo.com.</p>

        <h2>Contact</h2>
        <p>Dúvidas: suporte@exemplo.com</p>
      </section>
    </div>
  );
};

export default PoliticaPrivacidade;
