"use client";

import { Code2, Cpu, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PortfolioContact } from "@/components/home/types";

interface ContactSectionProps {
  name: string;
  year: number;
  contact: PortfolioContact;
}

export function ContactSection({
  name,
  year,
  contact,
}: ContactSectionProps) {
  return (
    <section
      id='contact'
      className='container flex min-h-screen snap-start flex-col justify-center gap-10 pb-20 pt-16 md:pb-24'
    >
      <div className='grid gap-8 md:grid-cols-[minmax(0,1.3fr),minmax(0,0.9fr)] md:items-center'>
        <div>
          <p className='text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300'>
            Let&apos;s collaborate
          </p>
          <h2 className='mt-3 font-display text-3xl text-slate-50 md:text-4xl'>
            Open to roles where code quality, UX, and reliability matter
            equally.
          </h2>
          <p className='mt-4 max-w-xl text-sm text-slate-300'>
            If you&apos;re building a product that needs thoughtful UX, solid
            engineering, and someone who cares about long-term maintainability,
            I&apos;d love to chat.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            <a href={`mailto:${contact.email}`}>
              <Button className='rounded-full border-emerald-400/60 bg-emerald-400 px-5 text-[12px] font-semibold tracking-[0.16em] text-slate-950 hover:bg-emerald-300'>
                Start with an email
              </Button>
            </a>
            <a
              href={contact.linkedin}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center text-xs font-medium text-slate-200 underline-offset-4 hover:text-emerald-200 hover:underline'
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className='mt-5 grid gap-3 text-[13px] text-slate-300 sm:grid-cols-2'>
            <div className='rounded-xl border border-white/10 bg-slate-950/40 p-4'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400'>
                Direct
              </p>
              <p className='mt-2 flex items-center gap-2'>
                <Mail className='h-3.5 w-3.5 text-emerald-300' />
                {contact.email}
              </p>
              <p className='mt-1 flex items-center gap-2'>
                <Phone className='h-3.5 w-3.5 text-emerald-300' />
                {contact.phone}
              </p>
            </div>
            <div className='rounded-xl border border-white/10 bg-slate-950/40 p-4'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400'>
                Presence
              </p>
              <p className='mt-2 flex items-center gap-2'>
                <Github className='h-3.5 w-3.5 text-emerald-300' />
                <a
                  href={contact.github}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-emerald-200'
                >
                  GitHub profile
                </a>
              </p>
              <p className='mt-1 flex items-center gap-2'>
                <Linkedin className='h-3.5 w-3.5 text-emerald-300' />
                <a
                  href={contact.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-emerald-200'
                >
                  LinkedIn profile
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className='grid gap-3 sm:grid-cols-2'>
          <Card className='border-white/10 bg-slate-950/40 p-4 text-left shadow-none backdrop-blur'>
            <Code2 className='h-4 w-4 text-emerald-300' />
            <p className='mt-2 text-sm font-semibold text-slate-50'>
              Full-stack craft
            </p>
            <p className='mt-1 text-xs text-slate-300'>
              I bridge UI/UX decisions with backend constraints so that what we
              design is what ships—and stays maintainable.
            </p>
          </Card>
          <Card className='border-white/10 bg-slate-950/40 p-4 text-left shadow-none backdrop-blur'>
            <Cpu className='h-4 w-4 text-emerald-300' />
            <p className='mt-2 text-sm font-semibold text-slate-50'>
              Performance & reliability
            </p>
            <p className='mt-1 text-xs text-slate-300'>
              I care about profiling, monitoring, and state management so that
              products feel fast and stay robust under load.
            </p>
          </Card>
        </div>
      </div>

      <footer className='mt-8 border-t border-white/5 pt-4 text-center text-[11px] text-slate-500'>
        © {year} {name}. Designed & engineered as a full-screen, sectioned
        product story.
      </footer>
    </section>
  );
}
