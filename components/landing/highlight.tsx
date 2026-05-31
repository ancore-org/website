import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { siteContent } from "@/lib/content";

export function Highlight() {
  const { highlight } = siteContent;

  return (
    <Section variant="canvas">
      <Container>
        <Card className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-[36px] font-semibold text-ink leading-tight mb-6">
            {highlight.headline}
          </h2>
          <p className="text-[19px] text-ink-soft font-body leading-relaxed mb-10">
            {highlight.description}
          </p>

          <ul className="flex flex-col gap-4">
            {highlight.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-[17px] text-ink-soft font-body"
              >
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-success/15 text-accent-success flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6L5 9L10 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </Section>
  );
}
