"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const [aboutVideoInView, setAboutVideoInView] = useState(false);
  const aboutVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoNode = aboutVideoRef.current;
    if (!videoNode) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setAboutVideoInView(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.35 }
    );

    observer.observe(videoNode);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const videoNode = aboutVideoRef.current;
    if (!videoNode) return;
    if (aboutVideoInView) {
      void videoNode.play().catch(() => {});
      return;
    }
    videoNode.pause();
  }, [aboutVideoInView]);

  return (
    <section
      id='about-me'
      className='container flex min-h-screen snap-start flex-col justify-center gap-8 pb-20 pt-16 md:pb-24'
    >
      <div className='flex flex-wrap items-end justify-between gap-4'>
        <div>
          <p className='text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300'>
            About me
          </p>
          <h2 className='mt-3 font-display text-3xl text-slate-50 md:text-4xl'>
            Engineering with ownership, discipline, and resilience.
          </h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950/70 via-slate-950/45 to-slate-900/35 backdrop-blur'
      >
        <div className='pointer-events-none absolute -right-20 top-8 h-60 w-60 rounded-full bg-cyan-400/20 blur-3xl' />
        <div className='pointer-events-none absolute -left-16 bottom-8 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl' />
        <div className='relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1.2fr),minmax(0,0.8fr)] lg:items-start'>
          <div className='space-y-4 text-sm leading-relaxed text-slate-300 md:text-[15px]'>
            <p className='inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200'>
              About my approach
            </p>
            <p className='text-base leading-relaxed text-slate-100 md:text-[17px]'>
              I build production software with a balance of product thinking,
              engineering rigor, and execution speed.
            </p>
            <p>
              I&apos;m a passionate Web and Mobile Application Developer who
              thrives on building meaningful digital experiences. I enjoy
              transforming ideas into scalable, user-friendly applications that
              solve real-world problems.
            </p>
            <p>
              My journey in technology has been shaped by curiosity,
              persistence, and a strong belief in continuous growth. I&apos;ve
              worked on production-level web and mobile applications, focusing
              on clean architecture, performance optimization, and seamless user
              experiences. From implementing secure authentication systems to
              integrating complex APIs and payment gateways, I enjoy working
              across the full development lifecycle.
            </p>
            <p>
              What truly defines me is resilience. Whether debugging difficult
              production issues or resolving third-party library conflicts that
              block progress, I approach challenges with patience and
              determination. I believe every obstacle is an opportunity to
              improve technically and mentally.
            </p>
            <p>
              I value discipline, ownership, and high standards. My philosophy
              is simple:
            </p>
            <p className='rounded-xl bg-cyan-400/10 px-4 py-3 font-medium text-cyan-100'>
              We don&apos;t fail when we lose - we fail when we quit.
            </p>
            <p>
              I&apos;m constantly exploring new technologies, refining my craft,
              and pushing myself to build better, smarter, and more impactful
              solutions.
            </p>
          </div>

          <figure className='overflow-hidden rounded-[22px] lg:w-full lg:justify-self-end'>
            <video
              ref={aboutVideoRef}
              src='/hamza.mp4'
              muted
              loop
              playsInline
              preload='none'
              poster='/hamza-poster.webp'
              className='h-full w-full rounded-[22px] bg-slate-900/70 object-cover shadow-[0_26px_75px_rgba(6,182,212,0.22)]'
            />
          </figure>
        </div>
      </motion.div>
    </section>
  );
}
