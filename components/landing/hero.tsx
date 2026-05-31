import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-canvas">
      <div
        className="absolute inset-0 bg-gradient-to-br from-canvas via-paper to-primary-light/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #ca7ff8 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7c3aed 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-32 text-center">
        <Badge className="mb-8">{hero.badge}</Badge>

        <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.1] text-ink max-w-4xl mx-auto mb-6">
          {hero.headline}
        </h1>

        <p className="text-lg md:text-[19px] text-ink-soft font-body leading-relaxed max-w-2xl mx-auto mb-10">
          {hero.subhead}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
