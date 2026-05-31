import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary shadow-soft-lift hover:bg-primary-bright hover:shadow-card border-none",
  secondary:
    "bg-paper text-ink border border-hairline hover:bg-hairline shadow-none",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center min-h-[44px]",
    "rounded-pill font-body font-medium leading-none",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:shadow-focus",
    variant === "primary" ? "px-7 py-4 text-base" : "px-5 py-2.5 text-[15px]",
    variantStyles[variant],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
