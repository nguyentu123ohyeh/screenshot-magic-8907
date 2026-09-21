import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderMediaProps {
  label?: string;
  icon?: LucideIcon;
  className?: string;
  tone?: "light" | "navy";
}

/** Placeholder image block — no real imagery is used anywhere on this site. */
export function PlaceholderMedia({
  label = "Image placeholder",
  icon: Icon = ImageIcon,
  className,
  tone = "light",
}: PlaceholderMediaProps) {
  return (
    <div
      className={cn(
        "placeholder-media zoom-target flex h-full w-full flex-col items-center justify-center gap-3 text-center",
        tone === "navy" && "gradient-navy",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-12 items-center justify-center rounded-full border",
          tone === "navy"
            ? "border-accent/50 text-accent"
            : "border-border bg-background text-muted-foreground",
        )}
      >
        <Icon className="size-5" />
      </span>
      <span
        className={cn(
          "px-4 text-xs font-semibold tracking-[0.18em] uppercase",
          tone === "navy" ? "text-accent-soft" : "text-muted-foreground",
        )}
      >
        {label}
      </span>
    </div>
  );
}
