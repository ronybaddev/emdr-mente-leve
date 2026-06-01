/**
 * Central site configuration.
 * Update here to reflect changes across the entire application.
 */
export const SITE = {
  name: "Psicologia EMDR",
  tagline: "Transforme sua vida com a terapia EMDR",
  url: "https://psicologiaemdr.com.br",

  psychologist: {
    name: "Patrícia Rios de Miranda",
    crp: "CRP 108802",
    title: "Psicóloga Clínica",
    specialty: "Especialista em Terapia Familiar e EMDR",
  },

  contact: {
    phone: "+5511975284635",
    phoneDisplay: "+55 11 97528-4635",
    email: "contato@psicologiaemdr.com.br",
    hours: "Segunda a Sexta: 8h às 20h",
  },

  whatsapp: {
    /** Base wa.me link — append ?text= for pre-filled messages */
    base: "https://wa.me/5511975284635",
    generalMessage:
      "Olá! Gostaria de saber mais sobre a terapia EMDR.",
    schedulingMessage:
      "Olá! Gostaria de agendar uma consulta de EMDR.",
  },

  nav: [
    { label: "O que é EMDR", href: "#o-que-e" },
    { label: "Psicóloga", href: "#psicologos" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Agendamento", href: "#agendamento" },
    { label: "Contato", href: "#contato" },
  ],
} as const;

/** WhatsApp URL with pre-filled message helper */
export const waUrl = (message: keyof typeof SITE.whatsapp extends "base" | "generalMessage" | "schedulingMessage" ? keyof typeof SITE.whatsapp : never = "generalMessage") =>
  `${SITE.whatsapp.base}?text=${encodeURIComponent(SITE.whatsapp[message])}`;
