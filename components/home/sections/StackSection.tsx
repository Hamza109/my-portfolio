"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import type { FloatingChipLayout, StackTech } from "@/components/home/types";

interface StackSectionProps {
  stack: StackTech[];
  prefersReducedMotion: boolean;
}

export function StackSection({ stack, prefersReducedMotion }: StackSectionProps) {
  const [stackRevealed, setStackRevealed] = useState(false);

  const floatingChipLayout = useMemo<FloatingChipLayout[]>(() => {
    const columns = 5;
    const rows = Math.ceil(stack.length / columns);
    return stack.map((_, idx) => {
      const col = idx % columns;
      const row = Math.floor(idx / columns);
      const left = 10 + col * (80 / (columns - 1));
      const top = 14 + row * (72 / Math.max(rows - 1, 1));
      const driftX = 24 + (idx % 4) * 10;
      const driftY = 18 + (idx % 5) * 8;
      const duration = 3.8 + (idx % 6) * 0.45;
      const delay = (idx % 7) * 0.2;
      return { left, top, driftX, driftY, duration, delay };
    });
  }, [stack]);

  return (
    <section
      id='stack'
      className='container flex min-h-screen snap-start flex-col justify-center gap-8 pb-20 pt-16 md:pb-24'
    >
      <div className='flex flex-wrap items-end justify-between gap-4'>
        <div>
          <p className='text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300'>
            Tooling & expertise
          </p>
          <h2 className='mt-3 font-display text-3xl text-slate-50 md:text-4xl'>
            A stack tuned for speed and correctness.
          </h2>
          <p className='mt-3 max-w-xl text-sm text-slate-300'>
            From typed frontends to reliable APIs and infrastructure, I lean on
            tools that keep feedback loops fast and systems maintainable.
          </p>
        </div>
      </div>

      <div className='relative rounded-3xl bg-gradient-to-br from-slate-950/70 via-slate-950/50 to-slate-900/35 p-5 md:p-6'>
        <div className='pointer-events-none absolute -left-16 top-6 h-48 w-48 rounded-full bg-sky-400/15 blur-3xl' />
        <div className='pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl' />

        <div
          className={`relative flex flex-wrap gap-3 transition duration-500 md:hidden ${
            stackRevealed ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {stack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={
                stackRevealed && !prefersReducedMotion ? { y: [0, -5, 0] } : { y: 0 }
              }
              transition={{
                opacity: { duration: 0.25, delay: idx * 0.02 },
                ...(stackRevealed && !prefersReducedMotion
                  ? {
                      y: {
                        duration: 3.2 + (idx % 5) * 0.35,
                        delay: idx * 0.06,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
                  : {}),
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              className='group'
            >
              <div className='inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 shadow-[0_10px_30px_rgba(2,132,199,0.12)] backdrop-blur transition group-hover:border-sky-300/35 group-hover:bg-slate-900'>
                <span className='flex h-7 w-7 items-center justify-center rounded-full bg-black/35'>
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    width={15}
                    height={15}
                    className='h-[15px] w-[15px]'
                  />
                </span>
                <span className='text-[12px] font-semibold text-slate-100'>
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div
          className={`relative hidden h-[430px] transition duration-500 md:block ${
            stackRevealed ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {stack.map((tech, idx) => {
            const layout = floatingChipLayout[idx];
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                style={{ left: `${layout.left}%`, top: `${layout.top}%` }}
                className='group absolute'
              >
                <motion.div
                  animate={
                    stackRevealed && !prefersReducedMotion
                      ? {
                          x: [-layout.driftX, layout.driftX],
                          y: [-layout.driftY, layout.driftY],
                        }
                      : { x: 0, y: 0 }
                  }
                  transition={{
                    ...(stackRevealed && !prefersReducedMotion
                      ? {
                          x: {
                            duration: layout.duration,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: layout.delay,
                          },
                          y: {
                            duration: layout.duration * 0.9,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                            delay: layout.delay * 0.7,
                          },
                        }
                      : {}),
                  }}
                  className='inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 shadow-[0_10px_30px_rgba(2,132,199,0.12)] backdrop-blur transition group-hover:border-sky-300/35 group-hover:bg-slate-900'
                >
                  <span className='flex h-7 w-7 items-center justify-center rounded-full bg-white/35'>
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      width={15}
                      height={15}
                      className='h-[15px] w-[15px]'
                    />
                  </span>
                  <span className='text-[12px] font-semibold text-slate-100'>
                    {tech.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {!stackRevealed && (
          <motion.div
            drag
            dragElastic={0.85}
            dragConstraints={{ left: -40, right: 40, top: -24, bottom: 24 }}
            onDragEnd={(_, info) => {
              const strongShake =
                Math.abs(info.offset.x) > 42 ||
                Math.abs(info.offset.y) > 24 ||
                Math.abs(info.velocity.x) > 520 ||
                Math.abs(info.velocity.y) > 520;
              if (strongShake) setStackRevealed(true);
            }}
            whileTap={{ scale: 0.985 }}
            className='absolute inset-0 z-20 flex cursor-grab items-center justify-center rounded-3xl bg-slate-950/78 active:cursor-grabbing'
          >
            <motion.div
              animate={prefersReducedMotion ? undefined : { x: [0, -8, 8, -6, 6, 0] }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: 1.1,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      ease: "easeInOut",
                    }
              }
              className='px-6 text-center'
            >
              <p className='inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200'>
                <Sparkles className='h-3 w-3' />
                Grab and Shake
              </p>
              <p className='mt-2 text-sm text-slate-200'>
                Reveal floating skill chips
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
