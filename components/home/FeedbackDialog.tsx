"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { PortfolioContact } from "@/components/home/types";

interface FeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contact: PortfolioContact;
  prefersReducedMotion: boolean;
}

export function FeedbackDialog({
  open,
  onOpenChange,
  contact,
  prefersReducedMotion,
}: FeedbackDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='overflow-hidden border-white/10 bg-slate-950/95 text-slate-100 sm:max-w-xl'>
        <div className='pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl' />
        <div className='pointer-events-none absolute -left-12 bottom-0 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl' />
        <DialogHeader className='relative'>
          <motion.div
            className='mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/30 to-sky-400/20 text-cyan-100'
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    rotate: [0, -8, 8, -5, 5, 0],
                    y: [0, -3, 0],
                    scale: [1, 1.04, 1],
                  }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          >
            <Mail className='h-7 w-7' />
          </motion.div>
          <DialogTitle className='font-display text-2xl leading-tight text-white'>
            So, what do you think?
          </DialogTitle>
          <DialogDescription className='mt-2 text-[15px] leading-relaxed text-slate-300'>
            Have an idea in mind? Let&apos;s connect and turn it into a real,
            scalable product.
          </DialogDescription>
          <p className='mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200'>
            <Sparkles className='h-3.5 w-3.5' />
            Open for collaborations
          </p>
        </DialogHeader>
        <DialogFooter className='mt-2 gap-2 sm:justify-start sm:space-x-0'>
          <a href={`mailto:${contact.email}`} className='w-full sm:w-auto'>
            <Button className='w-full rounded-full bg-cyan-400 px-6 text-slate-950 hover:bg-cyan-300'>
              Connect via email
            </Button>
          </a>
          <a
            href={contact.linkedin}
            target='_blank'
            rel='noreferrer'
            className='w-full sm:w-auto'
          >
            <Button
              variant='primary'
              className='w-full rounded-full border-white/20 bg-transparent text-slate-100 hover:bg-white/10'
            >
              Message on LinkedIn
            </Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
