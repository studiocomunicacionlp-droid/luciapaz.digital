import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { withBasePath } from "@/lib/utils";
import { TRUSTED_BRANDS } from "@/lib/brands";

export default function TrustedBrands() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <AnimatedSection>
          <div className="text-center">
            <Eyebrow>Marcas que ya confiaron</Eyebrow>
          </div>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {TRUSTED_BRANDS.map(({ name, url, logo }, i) => (
            <AnimatedSection key={name} delay={i * 0.05}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="relative flex h-24 items-center justify-center rounded-2xl border-2 border-rose-light bg-white px-5 py-4 shadow-card transition-colors hover:border-rose-strong"
              >
                <Image
                  src={withBasePath(logo)}
                  alt={name}
                  fill
                  className="object-contain p-4"
                />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
