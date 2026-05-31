"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { nav } = siteContent;

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-[1280px] items-center justify-between",
          "rounded-pill bg-paper pl-6 pr-2 py-2",
          "shadow-card"
        )}
        aria-label="Main navigation"
      >
        <Link href="/" className="font-display text-xl font-semibold text-ink">
          {nav.logo}
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[15px] font-medium text-ink-soft font-body",
                "px-4 py-2 rounded-pill",
                "hover:text-ink hover:bg-cloud transition-colors",
                "focus-visible:outline-none focus-visible:shadow-focus"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            href={nav.cta.href}
            variant="primary"
            className="hidden sm:inline-flex min-h-[44px] py-0"
          >
            {nav.cta.label}
          </Button>

          <button
            type="button"
            className="md:hidden flex items-center justify-center min-h-[44px] min-w-[44px] rounded-pill text-ink focus-visible:outline-none focus-visible:shadow-focus"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden mx-auto max-w-[1280px] mt-2 rounded-xl bg-cloud shadow-card p-4">
          <div className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-ink-soft font-body py-3 px-4 rounded-pill hover:text-ink hover:bg-cloud transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={nav.cta.href}
              variant="primary"
              className="mt-2 w-full"
              onClick={() => setMenuOpen(false)}
            >
              {nav.cta.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
