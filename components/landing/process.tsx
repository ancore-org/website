import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { siteContent } from "@/lib/content";

export function Process() {
  const { process } = siteContent;

  return (
    <Section variant="paper" id={process.id}>
      <Container>
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-3xl md:text-[36px] font-semibold text-ink leading-tight mb-4">
            {process.headline}
          </h2>
          <p className="text-[19px] text-ink-soft font-body leading-relaxed">
            {process.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {process.steps.map((step) => (
            <Card key={step.number}>
              <span className="text-xs font-medium text-primary font-body mb-4 block">
                {step.number}
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink mb-4">
                {step.title}
              </h3>
              <p className="text-[17px] text-ink-soft font-body leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
