export const CONFIG = {
  wa: {
    phone:    "5511988652345",
    msgHero:  "Olá! Vi a LP e quero saber como reduzir no-show e automatizar meu atendimento com IA.",
    msgFloat: "Olá! Vim pelo site da Intalky e quero entender como o ecossistema comercial funciona para minha clínica.",
    msgDemo:  "Olá! Quero agendar uma demonstração da Intalky para minha clínica.",
    msgFinal: "Olá! Quero acabar com os no-shows e automatizar meu atendimento. Podemos conversar?",
    ctaHero:  "Quero Automatizar Minhas Vendas →",
    ctaFloat: "Falar com Especialista",
    ctaFinal: "Quero Começar Agora →",
  },
  brand: {
    name:    "Intalky",
    tagline: "Assessoria comercial e automação",
  },
};

export const waURL = (msg = CONFIG.wa.msgHero) =>
  `https://wa.me/${CONFIG.wa.phone}?text=${encodeURIComponent(msg)}`;
