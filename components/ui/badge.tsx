import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-brand/20 bg-soft px-3 py-1 text-xs font-semibold tracking-[0.03em] text-brand",
        className
      )}
    >
      {children}
    </span>
  );
}
