"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function AnimatedSection({
  children,
  delay = 0
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
