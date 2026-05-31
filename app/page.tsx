import { AnnouncementBanner } from "@/components/landing/announcement-banner";
import { CtaSection } from "@/components/landing/cta-section";
import { Hero } from "@/components/landing/hero";
import { Highlight } from "@/components/landing/highlight";
import { Process } from "@/components/landing/process";
import { Services } from "@/components/landing/services";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Process />
        <Highlight />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
