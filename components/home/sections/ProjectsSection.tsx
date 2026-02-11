"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import type { PortfolioData } from "@/components/home/types";

interface ProjectsSectionProps {
  projects: PortfolioData["projects"];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id='projects'
      className='container flex min-h-screen snap-start flex-col justify-center gap-8 pb-20 pt-16 md:pb-24'
    >
      <div className='flex flex-wrap items-end justify-between gap-4'>
        <div>
          <p className='text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-300'>
            Selected work
          </p>
          <h2 className='mt-3 font-display text-3xl text-slate-50 md:text-4xl'>
            Real systems, not just shots.
          </h2>
          <p className='mt-3 max-w-xl text-sm text-slate-300'>
            I focus on products that replace manual workflows, connect multiple
            stakeholders, and need to be reliable beyond the first launch.
          </p>
        </div>
        <div className='rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-medium text-emerald-200'>
          Full-stack delivery · Web & mobile
        </div>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className='group flex flex-col rounded-2xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-sm'
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className='flex items-start justify-between gap-2'>
              <h3 className='font-display text-lg text-slate-50'>
                {project.title}
              </h3>
              <span className='inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200'>
                <BriefcaseBusiness className='h-3 w-3' />
                CASE
              </span>
            </div>
            <p className='mt-3 text-sm text-slate-300'>{project.summary}</p>
            <p className='mt-3 text-[12px] font-semibold text-amber-200'>
              {project.outcome}
            </p>
            <div className='mt-4 flex flex-wrap gap-1.5'>
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className='rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1 text-[11px] text-slate-200'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
