"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { withBasePath } from "@/lib/utils";

const TESTIMONIAL_COUNT = 19;
const TESTIMONIALS = Array.from({ length: TESTIMONIAL_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/images/testimonials/testimonial-${n}.jpg`;
});

export default function SocialProof() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container className="px-0 sm:px-6 lg:px-8">
        <div className="px-6 sm:px-0">
          <AnimatedSection>
            <Eyebrow>Casos reales</Eyebrow>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex items-end justify-between gap-4">
              <p className="mt-6 max-w-2xl text-balance text-lg text-ink/75">
                Capturas reales de WhatsApp de emprendedoras que dejaron de
                depender del celular y empezaron a vender con una tienda o
                landing propia.
              </p>
              <div className="hidden shrink-0 gap-2 sm:flex">
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  aria-label="Ver testimonios anteriores"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-rose text-wine transition-colors hover:bg-rose-light"
                >
                  <ChevronLeft className="h-5 w-5" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  aria-label="Ver más testimonios"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-rose text-wine transition-colors hover:bg-rose-light"
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={2} />
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2}>
          <div
            ref={scrollerRef}
            className="scrollbar-hide mt-10 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-6 pb-2 sm:px-0"
          >
            {TESTIMONIALS.map((src, i) => (
              <div
                key={src}
                className="w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl shadow-card sm:w-[280px]"
              >
                <Image
                  src={withBasePath(src)}
                  alt={`Testimonio ${i + 1} de ${TESTIMONIAL_COUNT}: captura real de WhatsApp de una clienta agradeciendo el trabajo`}
                  width={700}
                  height={500}
                  className="block h-auto w-full"
                />
              </div>
            ))}
            <div className="w-20 shrink-0 sm:hidden" aria-hidden="true" />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
