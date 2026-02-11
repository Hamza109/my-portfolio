"use client";

import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NavItem, PortfolioContact } from "@/components/home/types";

interface TopNavProps {
  name: string;
  navItems: NavItem[];
  contact: PortfolioContact;
}

export function TopNav({ name, navItems, contact }: TopNavProps) {
  return (
    <header className='container py-4 md:py-6'>
      <nav className='flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs backdrop-blur'>
        <div className='flex items-center gap-3'>
          <div className='overflow-hidden'>
            <Image
              src='/hamza-logo.webp'
              alt='Hamza profile logo'
              width={45}
              height={45}
              className='h-9 w-9 scale-125 object-cover'
              priority
            />
          </div>
          <div>
            <p className='font-display text-[10px] uppercase tracking-[0.28em] text-slate-400'>
              Portfolio
            </p>
            <p className='text-xs font-semibold text-slate-50'>{name}</p>
          </div>
        </div>

        <div className='hidden items-center gap-1 md:flex'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 transition hover:bg-slate-100/5 hover:text-white'
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className='flex items-center gap-2'>
          <a
            href={contact.linkedin}
            target='_blank'
            rel='noreferrer'
            aria-label='Open LinkedIn profile'
            title='LinkedIn'
            className='hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:border-accent/60 hover:text-accent sm:flex'
          >
            <Linkedin className='h-3.5 w-3.5' />
          </a>
          <a
            href={contact.github}
            target='_blank'
            rel='noreferrer'
            aria-label='Open GitHub profile'
            title='GitHub'
            className='hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:border-accent/60 hover:text-accent sm:flex'
          >
            <Github className='h-3.5 w-3.5' />
          </a>
          <a href={`mailto:${contact.email}`}>
            <Button
              size='sm'
              className='h-8 rounded-full border-accent/60 bg-amber-400 px-4 text-[11px] font-semibold tracking-[0.16em] text-slate-950 hover:bg-accent'
            >
              LET&apos;S TALK
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
