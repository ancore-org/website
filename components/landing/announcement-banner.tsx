import { siteContent } from "@/lib/content";

export function AnnouncementBanner() {
  const { announcement } = siteContent;

  return (
    <div className="bg-paper text-ink-soft py-2.5 px-6 text-center text-sm font-body">
      {announcement.text}{" "}
      <a
        href={announcement.linkHref}
        className="font-medium text-link hover:text-link-pressed transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {announcement.linkText}
      </a>
    </div>
  );
}
