"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  Cpu,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolio-data";

export default function HomePage() {
  const data = portfolioData;
  const year = new Date().getFullYear();

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  const capabilities = [
    {
      title: "Product & UX",
      text: "I partner with teams from brief to shipped product, aligning UX, brand, and engineering decisions with business goals.",
      icon: Palette,
    },
    {
      title: "Architecture",
      text: "Secure, scalable backends with predictable data flows and performance-aware decisions across the stack.",
      icon: Database,
    },
    {
      title: "System Reliability",
      text: "Typed APIs, robust error paths, and observability baked into the implementation rather than added at the end.",
      icon: ShieldCheck,
    },
    {
      title: "Delivery Mindset",
      text: "CI-aware workflows, code reviews, and an obsession with maintainable code that can be iterated on quickly.",
      icon: Rocket,
    },
  ];

  const stackWithIcons = [
    { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Redux Toolkit", icon: "https://cdn.simpleicons.org/redux/764ABC" },
    { name: "Expo", icon: "https://cdn.simpleicons.org/expo/FFFFFF" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
    { name: "Prisma ORM", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
    { name: "REST APIs", icon: "https://cdn.simpleicons.org/openapiinitiative/6BA539" },
    { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/FFFFFF" },
    { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/FFFFFF" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    {
      name: "GitHub Actions",
      icon: "https://cdn.simpleicons.org/githubactions/2088FF",
    },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/DD2C00" },
    { name: "Qdrant", icon: "https://cdn.simpleicons.org/qdrant/E75C7D" },
    { name: "OpenAI API", icon: "https://cdn.simpleicons.org/openai/FFFFFF" },
  ];

  return (
    <main className='relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#030712] via-[#020617] to-[#020617] text-white'>
      {/* Background accents */}
      <motion.div
        className='pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-brand/20 blur-3xl'
        animate={{ y: [0, -20, 0], x: [0, 18, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className='pointer-events-none absolute right-[-140px] top-44 h-[420px] w-[420px] rounded-full bg-accent/25 blur-3xl'
        animate={{ y: [0, 18, 0], x: [0, -16, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.8)_0,_transparent_55%)] opacity-70' />

      <div className='relative z-10 flex min-h-screen flex-col'>
        {/* Top navigation */}
        <header className='container py-4 md:py-6'>
          <nav className='flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs shadow-card backdrop-blur'>
            <div className='flex items-center gap-3'>
              <div className='flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-brand/80 via-brand to-accent/80 text-xs font-semibold'>
                HH
              </div>
              <div>
                <p className='font-display text-[10px] uppercase tracking-[0.28em] text-slate-400'>
                  Portfolio
                </p>
                <p className='text-xs font-semibold text-slate-50'>
                  {data.name}
                </p>
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
                href={data.contact.linkedin}
                target='_blank'
                rel='noreferrer'
                aria-label='Open LinkedIn profile'
                title='LinkedIn'
                className='hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:border-accent/60 hover:text-accent sm:flex'
              >
                <Linkedin className='h-3.5 w-3.5' />
              </a>
              <a
                href={data.contact.github}
                target='_blank'
                rel='noreferrer'
                aria-label='Open GitHub profile'
                title='GitHub'
                className='hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:border-accent/60 hover:text-accent sm:flex'
              >
                <Github className='h-3.5 w-3.5' />
              </a>
              <a href={`mailto:${data.contact.email}`}>
                <Button
                  size='sm'
                  className='h-8 rounded-full border-accent/60 bg-accent px-4 text-[11px] font-semibold tracking-[0.16em] text-slate-950 hover:bg-amber-400'
                >
                  LET&apos;S TALK
                </Button>
              </a>
            </div>
          </nav>
        </header>

        {/* Full-screen snap sections */}
        <div className='relative flex-1'>
          {/* Hero section */}
          <section
            id='about'
            className='container flex min-h-screen snap-start flex-col justify-center gap-10 pb-20 pt-10 md:pb-24 md:pt-4'
          >
            <div className='grid gap-10 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] md:items-center'>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-slate-300'>
                  <Sparkles className='h-3 w-3 text-amber-300' />
                  <span className='font-medium tracking-[0.14em] uppercase'>
                    Full-stack & React Native engineer
                  </span>
                </div>

                <h1 className='mt-5 font-display text-4xl leading-[1.05] text-white md:text-6xl'>
                  I design, architect, and ship
                  <span className='bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent'>
                    {" "}
                    production-ready products
                  </span>{" "}
                  for web & mobile.
                </h1>

                <p className='mt-5 max-w-2xl text-sm text-slate-300 md:text-base'>
                  {data.tagline}
                </p>
                <p className='mt-3 max-w-2xl text-sm text-slate-400 md:text-[15px]'>
                  {data.intro}
                </p>

                <div className='mt-6 flex flex-wrap items-center gap-3 text-[11px] text-slate-300'>
                  <span className='inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5'>
                    <MapPin className='h-3 w-3' />
                    {data.location}
                  </span>
                  <span className='inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-emerald-200'>
                    <Sparkles className='h-3 w-3' />
                    {data.availability}
                  </span>
                </div>

                <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4'>
                  {data.stats.map((stat) => (
                    <Card
                      key={stat.label}
                      className='border-white/10 bg-white/5 p-3 text-left shadow-none backdrop-blur-sm'
                    >
                      <p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400'>
                        {stat.label}
                      </p>
                      <p className='mt-1 text-lg font-semibold text-white'>
                        {stat.value}
                      </p>
                    </Card>
                  ))}
                </div>

                <div className='mt-7 flex flex-wrap items-center gap-3'>
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className='flex flex-col gap-4'
              >
                <Card className='relative overflow-hidden border-white/10 bg-white/5 p-5 text-left text-slate-100 shadow-none backdrop-blur'>
                  <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.08)_0,_transparent_60%)]' />
                  <div className='relative z-10'>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300'>
                      What I&apos;m good at
                    </p>
                    <div className='mt-3 grid gap-3'>
                      {capabilities.slice(0, 2).map((cap) => {
                        const Icon = cap.icon;
                        return (
                          <div key={cap.title} className='flex gap-2'>
                            <div className='mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-white/10'>
                              <Icon className='h-3.5 w-3.5 text-amber-300' />
                            </div>
                            <div>
                              <p className='text-xs font-semibold text-slate-50'>
                                {cap.title}
                              </p>
                              <p className='mt-1 text-[11px] leading-relaxed text-slate-300'>
                                {cap.text}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Card>

                <Card className='border-white/10 bg-slate-950/40 p-4 text-left shadow-none backdrop-blur'>
                  <p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400'>
                    Core stack (day to day)
                  </p>
                  <div className='mt-3 flex flex-wrap gap-1.5 text-[11px] text-slate-200'>
                    <span className='rounded-full bg-white/5 px-3 py-1'>
                      React & React Native
                    </span>
                    <span className='rounded-full bg-white/5 px-3 py-1'>
                      Next.js
                    </span>
                    <span className='rounded-full bg-white/5 px-3 py-1'>
                      TypeScript
                    </span>
                    <span className='rounded-full bg-white/5 px-3 py-1'>
                      Prisma · MySQL
                    </span>
                    <span className='rounded-full bg-white/5 px-3 py-1'>
                      REST · WebSockets
                    </span>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Projects section */}
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
                  I focus on products that replace manual workflows, connect
                  multiple stakeholders, and need to be reliable beyond the
                  first launch.
                </p>
              </div>
              <div className='rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-medium text-emerald-200'>
                Full-stack delivery · Web & mobile
              </div>
            </div>

            <div className='grid gap-4 md:grid-cols-3'>
              {data.projects.map((project) => (
                <motion.article
                  key={project.title}
                  className='group flex flex-col rounded-2xl border border-white/10 bg-slate-900/40 p-5 shadow-card backdrop-blur-sm'
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
                  <p className='mt-3 text-sm text-slate-300'>
                    {project.summary}
                  </p>
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

          {/* Stack section */}
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
                  From typed frontends to reliable APIs and infrastructure, I
                  lean on tools that keep feedback loops fast and systems
                  maintainable.
                </p>
              </div>
            </div>

            <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
              {stackWithIcons.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: idx * 0.02 }}
                >
                  <Card className='group border-white/10 bg-slate-950/40 p-3 shadow-none backdrop-blur transition hover:border-amber-300/35 hover:bg-slate-900/60'>
                    <div className='flex items-center gap-3'>
                      <div className='flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/30'>
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={16}
                          height={16}
                          className='h-4 w-4'
                          unoptimized
                        />
                      </div>
                      <p className='text-[13px] font-semibold text-slate-100'>
                        {tech.name}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Journey section */}
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
                {data.experience.map((item, idx) => (
                  <motion.div
                    key={item.title + item.company}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: idx * 0.08,
                      ease: "easeOut",
                    }}
                    className='relative pl-6 md:grid md:grid-cols-2 md:items-start md:gap-x-12 md:pl-0 md:py-4'
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

          {/* Contact section */}
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
                  If you&apos;re building a product that needs thoughtful UX,
                  solid engineering, and someone who cares about long-term
                  maintainability, I&apos;d love to chat.
                </p>

                <div className='mt-6 flex flex-wrap gap-3'>
                  <a href={`mailto:${data.contact.email}`}>
                    <Button className='rounded-full border-emerald-400/60 bg-emerald-400 px-5 text-[12px] font-semibold tracking-[0.16em] text-slate-950 hover:bg-emerald-300'>
                      Start with an email
                    </Button>
                  </a>
                  <a
                    href={data.contact.linkedin}
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
                      {data.contact.email}
                    </p>
                    <p className='mt-1 flex items-center gap-2'>
                      <Phone className='h-3.5 w-3.5 text-emerald-300' />
                      {data.contact.phone}
                    </p>
                  </div>
                  <div className='rounded-xl border border-white/10 bg-slate-950/40 p-4'>
                    <p className='text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400'>
                      Presence
                    </p>
                    <p className='mt-2 flex items-center gap-2'>
                      <Github className='h-3.5 w-3.5 text-emerald-300' />
                      <a
                        href={data.contact.github}
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
                        href={data.contact.linkedin}
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
                    I bridge UI/UX decisions with backend constraints so that
                    what we design is what ships—and stays maintainable.
                  </p>
                </Card>
                <Card className='border-white/10 bg-slate-950/40 p-4 text-left shadow-none backdrop-blur'>
                  <Cpu className='h-4 w-4 text-emerald-300' />
                  <p className='mt-2 text-sm font-semibold text-slate-50'>
                    Performance & reliability
                  </p>
                  <p className='mt-1 text-xs text-slate-300'>
                    I care about profiling, monitoring, and state management so
                    that products feel fast and stay robust under load.
                  </p>
                </Card>
              </div>
            </div>

            <footer className='mt-8 border-t border-white/5 pt-4 text-center text-[11px] text-slate-500'>
              © {year} {data.name}. Designed & engineered as a full-screen,
              sectioned product story.
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
