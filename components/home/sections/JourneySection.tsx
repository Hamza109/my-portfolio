"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { PortfolioData } from "@/components/home/types";

interface JourneySectionProps {
  experience: PortfolioData["experience"];
}

export function JourneySection({ experience }: JourneySectionProps) {
  return (
    <section
      id='journey'
      className='container flex min-h-screen snap-start flex-col justify-center gap-8 pb-20 pt-16 md:pb-24'
    >
      <div className='flex flex-wrap items-end justify-between gap-4'>
        <div>
          <p className='text-[11px] font-semibold uppercase tracking-[0.24em] text-violet-300'>
            Journey
          </p>
          <h2 className='mt-3 font-display text-3xl text-slate-50 md:text-4xl'>
            Experience & education.
          </h2>
          <p className='mt-3 max-w-xl text-sm text-slate-300'>
            I&apos;ve worked across legal-tech, advisory platforms, and
            cross-domain products, with a foundation in computer science.
          </p>
        </div>
      </div>

      <div className='relative mt-6'>
        <span className='absolute left-[0.35rem] top-2 block h-[calc(100%-10px)] w-[2px] bg-gradient-to-b from-amber-300 via-sky-400 to-transparent opacity-70 md:hidden' />
        <span className='absolute left-1/2 top-2 hidden h-[calc(100%-10px)] w-[2px] -translate-x-1/2 bg-gradient-to-b from-amber-300 via-sky-400 to-transparent opacity-70 md:block' />

        <div className='space-y-5 md:space-y-0'>
          {experience.map((item, idx) => (
            <motion.div
              key={item.title + item.company}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08, ease: "easeOut" }}
              className='relative pl-6 md:grid md:grid-cols-2 md:items-start md:gap-x-12 md:py-4 md:pl-0'
            >
              <span className='absolute -left-[0.18rem] top-3 h-3 w-3 rounded-full border border-slate-900 bg-amber-300 shadow-[0_0_0_6px_rgba(15,23,42,0.9)] md:left-1/2 md:-translate-x-1/2' />

              {idx % 2 === 0 ? (
                <>
                  <Card className='border-white/10 bg-slate-950/40 p-4 text-left shadow-none backdrop-blur md:mr-8'>
                    <div className='flex flex-wrap items-center justify-between gap-2'>
                      <h3 className='font-display text-[15px] text-slate-50'>
                        {item.title}
                      </h3>
                      <span className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200'>
                        {item.period}
                      </span>
                    </div>
                    <p className='mt-1 text-[13px] font-semibold text-amber-200'>
                      {item.company}
                    </p>
                    <ul className='mt-3 space-y-1.5 text-[13px] text-slate-300'>
                      {item.points.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </Card>
                  <div className='hidden md:block' />
                </>
              ) : (
                <>
                  <div className='hidden md:block' />
                  <Card className='border-white/10 bg-slate-950/40 p-4 text-left shadow-none backdrop-blur md:ml-8'>
                    <div className='flex flex-wrap items-center justify-between gap-2'>
                      <h3 className='font-display text-[15px] text-slate-50'>
                        {item.title}
                      </h3>
                      <span className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200'>
                        {item.period}
                      </span>
                    </div>
                    <p className='mt-1 text-[13px] font-semibold text-amber-200'>
                      {item.company}
                    </p>
                    <ul className='mt-3 space-y-1.5 text-[13px] text-slate-300'>
                      {item.points.map((point) => (
                        <li key={point}>- {point}</li>
                      ))}
                    </ul>
                  </Card>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
