import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PhotoFrame from "@/components/ui/PhotoFrame";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { withBasePath } from "@/lib/utils";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-wine py-20 text-cream sm:py-28">
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-rose-strong/20 blur-3xl" />

      <Container className="relative grid items-center gap-10 md:grid-cols-[280px_1fr] md:gap-14">
        <AnimatedSection direction="left">
          <PhotoFrame
            src="/images/lucia-2.jpg"
            alt="Retrato de Lucía Paz"
            className="mx-auto aspect-[4/5] w-full max-w-xs border-4 border-cream/10 md:mx-0"
            imgClassName="object-bottom"
          />
        </AnimatedSection>

        <div>
          <AnimatedSection>
            <Eyebrow className="bg-cream/10 text-rose-light">
              Sobre mí
            </Eyebrow>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mt-5 text-balance text-lg leading-relaxed text-cream/90 sm:text-xl">
              Arranqué en el periodismo deportivo. Me pasé años contando las
              historias de otros — sus logros, sus remontadas, sus
              fracasos — hasta que sentí que era momento de construir la
              mía.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-4 text-balance text-lg leading-relaxed text-cream/90 sm:text-xl">
              Tuve mi propia tienda de e-commerce y un local físico. Ahí
              aprendí, a los golpes, todo lo que hoy resuelvo para otras: lo
              que es armar un catálogo a las apuradas, perder una venta
              porque no llegaste a contestar, cerrar el local cansada
              sabiendo que al otro día arrancaba todo de nuevo. No lo
              teoricé — lo viví.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="mt-4 text-balance text-lg leading-relaxed text-cream/90 sm:text-xl">
              De esa experiencia nació la idea de dejar de vender sola para
              construir algo que vendiera por mí. Hoy soy Partner
              certificada de Tiendanube, y ayudo a otras emprendedoras a no
              pasar por lo que a mí me costó resolver sola: cada tienda o
              landing que armo tiene un poco de lo que me hubiese gustado
              tener cuando empecé.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <a
              href={withBasePath("/images/certificado-tiendanube.jpg")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-cream/10 py-2.5 pl-3 pr-4 transition-colors hover:bg-cream/15"
            >
              <div className="relative h-6 w-[111px] shrink-0">
                <Image
                  src={withBasePath("/images/tiendanube-logo.png")}
                  alt="Tiendanube"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-cream/85 underline decoration-cream/30 underline-offset-4">
                Partner certificada · ver certificado
              </span>
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="mt-4 text-balance text-lg leading-relaxed text-cream/90 sm:text-xl">
              Pero lo más importante es que vengo a recordarte lo esencial:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <p className="mt-7 font-script text-4xl text-rose-light">
              Sos Libre.
            </p>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
