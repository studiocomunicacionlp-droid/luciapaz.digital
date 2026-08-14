import Image from "next/image";
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
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <AnimatedSection>
          <Eyebrow>Casos reales</Eyebrow>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-6 max-w-2xl text-balance text-lg text-ink/75">
            Capturas reales de WhatsApp de emprendedoras que dejaron de
            depender del celular y empezaron a vender con una tienda o
            landing propia.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {TESTIMONIALS.map((src) => (
              <div
                key={src}
                className="break-inside-avoid overflow-hidden rounded-2xl shadow-card"
              >
                <Image
                  src={withBasePath(src)}
                  alt="Testimonio real de una clienta por WhatsApp"
                  width={700}
                  height={500}
                  className="block h-auto w-full"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
