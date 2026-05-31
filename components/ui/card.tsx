import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-xl bg-cloud p-xl shadow-card", className)}>
      {children}
    </div>
  );
}
