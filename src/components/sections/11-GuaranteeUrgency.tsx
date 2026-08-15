"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Timer } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  CUPOS_DISPONIBLES,
  CUPOS_OCUPADOS,
  FECHA_CIERRE,
  FECHA_CIERRE_ISO,
  TOTAL_CUPOS,
} from "@/lib/launch";

export default function GuaranteeUrgency() {
  const [cierreVigente, setCierreVigente] = useState(true);

  useEffect(() => {
    if (!FECHA_CIERRE_ISO) {
      setCierreVigente(false);
      return;
    }
    const limite = new Date(`${FECHA_CIERRE_ISO}T23:59:59`);
    setCierreVigente(new Date() <= limite);
  }, []);

  const mostrarFecha = FECHA_CIERRE && cierreVigente;

  return (
    <section className="bg-ink py-20 text-cream sm:py-28">
      <Container className="grid gap-8 md:grid-cols-2">
        <AnimatedSection direction="left">
          <div className="flex h-full flex-col gap-4 rounded-3xl bg-cream/5 p-7">
            <Timer className="h-8 w-8 text-rose-light" strokeWidth={1.75} />
            <h3 className="font-heading text-xl font-bold">
              Urgencia real
            </h3>
            <p className="text-cream/75">
              Precio de lanzamiento, solo{" "}
              <span className="font-semibold text-rose-light">
                {CUPOS_DISPONIBLES} cupos
              </span>
              {mostrarFecha && (
                <>
                  {" "}
                  · cierra el{" "}
                  <span className="font-semibold text-rose-light">
                    {FECHA_CIERRE}
                  </span>
                </>
              )}
              .
            </p>
            {CUPOS_OCUPADOS > 0 && (
              <div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-cream/10">
                  <div
                    className="h-full rounded-full bg-rose-strong"
                    style={{
                      width: `${(CUPOS_OCUPADOS / TOTAL_CUPOS) * 100}%`,
                    }}
                  />
                </div>
                <p className="mt-2 text-sm text-cream/60">
                  {CUPOS_OCUPADOS} de {TOTAL_CUPOS} cupos ya ocupados
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.1}>
          <div className="flex h-full flex-col gap-4 rounded-3xl bg-cream/5 p-7">
            <ShieldCheck className="h-8 w-8 text-rose-light" strokeWidth={1.75} />
            <h3 className="font-heading text-xl font-bold">
              Mi garantía de proceso
            </h3>
            <p className="text-balance text-cream/75">
              No te garantizo cuántas ventas vas a hacer — eso depende de tu
              producto, tu momento y tu mercado. Lo que sí te garantizo es
              que vas a tener una tienda o landing profesional, funcionando,
              y que vas a saber usarla sola cuando termine el
              acompañamiento.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
