import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedSection from "@/components/ui/AnimatedSection";
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

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {TRUSTED_BRANDS.map(({ name, url }, i) => (
            <AnimatedSection key={name} delay={i * 0.05}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-center justify-center rounded-2xl border-2 border-rose-light bg-white px-4 py-6 text-center shadow-card transition-colors hover:border-rose-strong hover:bg-rose-light/20"
              >
                <span className="font-heading text-sm font-semibold text-wine">
                  {name}
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
