import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/lib/content";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-canvas border-t border-hairline py-section">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-display text-2xl font-semibold text-ink mb-4">
              Ancore
            </p>
            <p className="text-[15px] text-ink-soft font-body leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium text-ink font-body mb-4">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-ink-soft font-body hover:text-link transition-colors"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 text-xs text-ink-soft font-body">
          {footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
