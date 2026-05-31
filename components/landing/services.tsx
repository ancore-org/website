import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { siteContent } from "@/lib/content";

export function Services() {
  const { services } = siteContent;

  return (
    <Section variant="canvas" id={services.id}>
      <Container>
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-3xl md:text-[36px] font-semibold text-ink leading-tight mb-4">
            {services.headline}
          </h2>
          <p className="text-[19px] text-ink-soft font-body leading-relaxed">
            {services.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.items.map((item) => (
            <Card key={item.title}>
              <h3 className="font-display text-2xl font-semibold text-ink mb-4">
                {item.title}
              </h3>
              <p className="text-[17px] text-ink-soft font-body leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
