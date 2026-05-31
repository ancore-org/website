import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/content";

export function CtaSection() {
  const { cta } = siteContent;

  return (
    <Section variant="paper" id={cta.id}>
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-[36px] font-semibold text-ink leading-tight mb-4">
            {cta.headline}
          </h2>
          <p className="text-[19px] text-ink-soft font-body leading-relaxed mb-10">
            {cta.subhead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={cta.primaryCta.href} variant="primary">
              {cta.primaryCta.label}
            </Button>
            <Button href={cta.secondaryCta.href} variant="secondary">
              {cta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
