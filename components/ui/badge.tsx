import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill",
        "bg-paper px-3 py-1 text-xs font-medium text-primary font-body",
        className
      )}
    >
      {children}
    </span>
  );
}
