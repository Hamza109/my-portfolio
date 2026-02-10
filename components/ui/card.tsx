import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <article className={cn("rounded-2xl border border-line bg-surface p-5 shadow-card transition duration-300", className)}>
      {children}
    </article>
  );
}
