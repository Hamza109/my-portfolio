"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Capability, PortfolioData } from "@/components/home/types";

interface OverviewSectionProps {
  data: PortfolioData;
  capabilities: Capability[];
  prefersReducedMotion: boolean;
}

export function OverviewSection({
  data,
  capabilities,
  prefersReducedMotion,
}: OverviewSectionProps) {
  return (
    <section
      id='overview'
      className='container flex min-h-screen snap-start flex-col justify-center gap-12 pb-20 pt-8 md:pb-24 md:pt-4'
    >
      <div className='grid gap-10 lg:grid-cols-12 lg:items-center'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='lg:col-span-7'
        >
          <div className='inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-[11px] text-sky-100'>
            <span className='h-1.5 w-1.5 rounded-full bg-sky-300' />
            <span className='font-semibold uppercase tracking-[0.16em]'>
              Software Engineer
            </span>
          </div>

          <h1 className='mt-5 max-w-4xl font-display text-4xl leading-[1.02] text-white md:text-6xl'>
            I design, architect, and ship
            <span className='bg-gradient-to-r from-sky-200 via-sky-300 to-emerald-300 bg-clip-text text-transparent'>
              {" "}
              production-ready products
            </span>{" "}
            for web & mobile.
          </h1>

          <p className='mt-6 max-w-2xl text-sm text-slate-300 md:text-base'>
            {data.tagline}
          </p>
          <p className='mt-3 max-w-2xl text-sm text-slate-400 md:text-[15px]'>
            {data.intro}
          </p>

          <div className='mt-7 flex flex-wrap items-center gap-3 text-[11px] text-slate-300'>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5'>
              <MapPin className='h-3 w-3' />
              {data.location}
            </span>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-emerald-200'>
              <Sparkles className='h-3 w-3' />
              {data.availability}
            </span>
          </div>

          <div className='mt-8 flex flex-wrap items-center gap-3'>
            <a href={`mailto:${data.contact.email}`}>
              <Button className='rounded-full border-brand bg-brand px-5 text-[12px] font-semibold tracking-[0.16em] text-white hover:bg-sky-700'>
                Contact for roles
              </Button>
            </a>
            <a
              href={data.cta.primary.href}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center text-xs font-medium text-slate-300 underline-offset-4 hover:text-amber-200 hover:underline'
            >
              Download full resume
            </a>
          </div>

          <div className='mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4'>
            {data.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                <Card className='h-full border-white/10 bg-white/[0.04] p-3 text-left shadow-none backdrop-blur-sm'>
                  <p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400'>
                    {stat.label}
                  </p>
                  <p className='mt-1 text-lg font-semibold text-white'>
                    {stat.value}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className='relative lg:col-span-5'
        >
          <motion.div
            className='relative mx-auto w-full max-w-[620px]'
            animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <div className='pointer-events-none absolute inset-x-8 top-16 -z-10 h-56 rounded-full bg-sky-400/20 blur-3xl' />
            <div className='pointer-events-none absolute inset-x-10 bottom-8 -z-10 h-44 rounded-full bg-emerald-300/15 blur-3xl' />
            <motion.figure
              className='relative mx-auto w-full'
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src='/hamza.webp'
                alt='Hamza portrait'
                width={1200}
                height={900}
                sizes='(min-width: 1024px) 42vw, 100vw'
                className='h-auto w-full object-contain opacity-[0.98] drop-shadow-[0_25px_50px_rgba(8,47,73,0.42)] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]'
                priority
              />
              <div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]' />
            </motion.figure>
          </motion.div>
        </motion.div>
      </div>

      <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          return (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
            >
              <Card className='h-full border-white/10 bg-slate-900/35 p-4 text-left shadow-none backdrop-blur transition hover:border-sky-300/35 hover:bg-slate-900/55'>
                <div className='flex items-center gap-2'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5'>
                    <Icon className='h-4 w-4 text-sky-200' />
                  </div>
                  <p className='text-sm font-semibold text-slate-100'>
                    {cap.title}
                  </p>
                </div>
                <p className='mt-2 text-[12px] leading-relaxed text-slate-300'>
                  {cap.text}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
