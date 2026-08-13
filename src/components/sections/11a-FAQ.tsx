"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedSection from "@/components/ui/AnimatedSection";

const FAQS = [
  {
    question: "¿Esto realmente funciona? Ya probé de todo.",
    answer:
      "Lo que probaste antes seguramente fue armarlo vos misma o delegar solo el contenido. Acá lo que cambia es la estructura: una tienda o landing pensada para vender sin que vos estés atrás explicando cada paso. No te garantizo ventas mágicas, pero sí una herramienta profesional que trabaja mientras vos no podés.",
  },
  {
    question: "No sé nada de tecnología, ¿voy a poder manejarla sola?",
    answer:
      "Sí. Vos no tocás una línea de código en ningún momento. Yo me encargo de toda la implementación y te dejo un manual de criterio + videos tutoriales para que sepas cargar productos, cambiar textos o fotos cuando lo necesites. Además tenés un mes de acompañamiento por WhatsApp para dudas de uso.",
  },
  {
    question: "¿Cuánto tiempo me va a demandar el proceso?",
    answer:
      "De tu lado, lo mínimo: una llamada inicial y completar un formulario de relevamiento. El resto de la implementación lo hago yo. No necesitás estar disponible todos los días ni aprender a diseñar.",
  },
  {
    question: "¿Qué pasa si no sé qué método elegir, Libre o Impacto?",
    answer:
      "No hace falta que lo definas antes de escribirme. En la llamada inicial vemos juntas qué vendés y cómo vendés, y ahí te recomiendo el método que mejor se adapta a tu negocio.",
  },
  {
    question: "¿Y si necesito cambios después de la entrega?",
    answer:
      "El mes de acompañamiento cubre dudas de uso (cómo hacer algo vos misma). Cambios de diseño post-entrega quedan fuera de ese acompañamiento, pero podemos conversar sobre eso puntualmente cuando lo necesites.",
  },
  {
    question: "¿Cómo es la forma de pago?",
    answer:
      "50% al inicio del proyecto y 50% contra entrega. Te paso todos los detalles apenas hablemos por WhatsApp.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <AnimatedSection>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <p className="mt-5 max-w-2xl text-balance font-heading text-2xl font-bold text-ink sm:text-3xl">
            Las dudas más comunes antes de empezar.
          </p>
        </AnimatedSection>

        <div className="mt-10 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={faq.question} delay={0.1 + i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-rose-light bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-base font-semibold text-ink sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-rose-strong transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={2}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-balance text-ink/75">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
