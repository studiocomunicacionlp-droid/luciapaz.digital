"use client";

import Image from "next/image";
import { ShoppingBag, Target } from "lucide-react";
import Container from "@/components/ui/Container";
import CTAButton from "@/components/ui/CTAButton";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { withBasePath } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 text-cream sm:pt-20">
      <Image
        src={withBasePath("/images/lucia-1.jpg")}
        alt="Lucía Paz"
        fill
        priority
        className="object-cover object-[50%_75%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wine/85 via-wine/88 to-wine-dark/95" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-strong/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-rose-light/10 blur-3xl" />

      <Container className="relative">
        <div className="max-w-xl">
          <AnimatedSection>
            <Eyebrow className="bg-cream/10 text-rose-light">
              Lanzamiento · solo 5 cupos
            </Eyebrow>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Soltá el celular y vendé en{" "}
              <span className="font-script font-semibold text-rose-light">
                automático,
              </span>{" "}
              con una web que habla por vos
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-balance text-lg text-cream/90 sm:text-xl">
              Tiendas Online y Landings a medida para emprendedoras que ya
              venden pero están hartas de estar 24/7 pegadas al celular.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-rose-light/80">
              ¿Qué vendés?
            </p>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#metodo-libre" className="gap-2.5">
                <ShoppingBag className="h-5 w-5" strokeWidth={2} />
                Vendo productos
              </CTAButton>
              <CTAButton
                href="#metodo-impacto"
                variant="outline"
                className="gap-2.5 border-cream/40 text-cream hover:bg-cream hover:text-wine"
              >
                <Target className="h-5 w-5" strokeWidth={2} />
                Vendo servicios
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
