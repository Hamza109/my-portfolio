"use client";

import { motion } from "framer-motion";

interface BackgroundAccentsProps {
  prefersReducedMotion: boolean;
}

export function BackgroundAccents({
  prefersReducedMotion,
}: BackgroundAccentsProps) {
  return (
    <>
      <motion.div
        className='pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-brand/20 blur-3xl'
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, -20, 0], x: [0, 18, 0], scale: [1, 1.04, 1] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 18, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className='pointer-events-none absolute right-[-140px] top-44 h-[420px] w-[420px] rounded-full bg-accent/25 blur-3xl'
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, 18, 0], x: [0, -16, 0], scale: [1, 1.06, 1] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.8)_0,_transparent_55%)] opacity-70' />
    </>
  );
}
