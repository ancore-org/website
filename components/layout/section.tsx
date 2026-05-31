import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "canvas" | "paper" | "cloud";
  id?: string;
}

const variantStyles = {
  canvas: "bg-canvas",
  paper: "bg-paper",
  cloud: "bg-cloud",
};

export function Section({
  children,
  className,
  variant = "canvas",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-section", variantStyles[variant], className)}
    >
      {children}
    </section>
  );
}
