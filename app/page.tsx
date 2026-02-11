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
    { label: "Overview", href: "#overview" },
    { label: "Work", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Journey", href: "#journey" },
    { label: "About Me", href: "#about-me" },
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

  const columns = 5;
  const rows = Math.ceil(stackWithIcons.length / columns);
  const floatingChipLayout = stackWithIcons.map((_, idx) => {
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
              <div className='overflow-hidden  '>
                <Image
                  src='/hamza-logo.png'
                  alt='Hamza profile logo'
                  width={45}
                  height={45}
                  className='h-9 w-9 object-cover scale-125'
                  priority
                />
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
          {/* Overview section */}
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
                  <span className='font-semibold tracking-[0.16em] uppercase'>
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
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className='pointer-events-none absolute inset-x-8 top-16 -z-10 h-56 rounded-full bg-sky-400/20 blur-3xl' />
                  <div className='pointer-events-none absolute inset-x-10 bottom-8 -z-10 h-44 rounded-full bg-emerald-300/15 blur-3xl' />
                  <motion.figure
                    className='relative mx-auto w-full'
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image
                      src='/hamza.png'
                      alt='Hamza portrait'
                      width={1200}
                      height={900}
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

            <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950/70 via-slate-950/50 to-slate-900/35 p-5 md:p-6'>
              <div className='pointer-events-none absolute -left-16 top-6 h-48 w-48 rounded-full bg-sky-400/15 blur-3xl' />
              <div className='pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl' />
              <div className='relative flex flex-wrap gap-3 md:hidden'>
                {stackWithIcons.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      opacity: { duration: 0.25, delay: idx * 0.02 },
                      y: {
                        duration: 3.2 + (idx % 5) * 0.35,
                        delay: idx * 0.06,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
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
                          unoptimized
                        />
                      </span>
                      <span className='text-[12px] font-semibold text-slate-100'>
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className='relative hidden h-[430px] md:block'>
                {stackWithIcons.map((tech, idx) => {
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
                        animate={{
                          x: [-layout.driftX, layout.driftX],
                          y: [-layout.driftY, layout.driftY],
                        }}
                        transition={{
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
                        }}
                        className='inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 shadow-[0_10px_30px_rgba(2,132,199,0.12)] backdrop-blur transition group-hover:border-sky-300/35 group-hover:bg-slate-900'
                      >
                        <span className='flex h-7 w-7 items-center justify-center rounded-full bg-black/35'>
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={15}
                            height={15}
                            className='h-[15px] w-[15px]'
                            unoptimized
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

          {/* About me section */}
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
                    I build production software with a balance of product
                    thinking, engineering rigor, and execution speed.
                  </p>
                  <p>
                    I&apos;m a passionate Web and Mobile Application Developer
                    who thrives on building meaningful digital experiences. I
                    enjoy transforming ideas into scalable, user-friendly
                    applications that solve real-world problems.
                  </p>
                  <p>
                    My journey in technology has been shaped by curiosity,
                    persistence, and a strong belief in continuous growth.
                    I&apos;ve worked on production-level web and mobile
                    applications, focusing on clean architecture, performance
                    optimization, and seamless user experiences. From
                    implementing secure authentication systems to integrating
                    complex APIs and payment gateways, I enjoy working across
                    the full development lifecycle.
                  </p>
                  <p>
                    What truly defines me is resilience. Whether debugging
                    difficult production issues or resolving third-party library
                    conflicts that block progress, I approach challenges with
                    patience and determination. I believe every obstacle is an
                    opportunity to improve technically and mentally.
                  </p>
                  <p>
                    I value discipline, ownership, and high standards. My
                    philosophy is simple:
                  </p>
                  <p className='rounded-xl bg-cyan-400/10 px-4 py-3 font-medium text-cyan-100'>
                    We don&apos;t fail when we lose - we fail when we quit.
                  </p>
                  <p>
                    I&apos;m constantly exploring new technologies, refining my
                    craft, and pushing myself to build better, smarter, and
                    more impactful solutions.
                  </p>
                </div>

                <figure className='overflow-hidden rounded-[22px] lg:justify-self-end lg:w-full'>
                  <video
                    src='/hamza.mp4'
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='metadata'
                    className='h-full w-full object-cover rounded-[22px] bg-slate-900/70 shadow-[0_26px_75px_rgba(6,182,212,0.22)]'
                  />
                </figure>
              </div>
            </motion.div>
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
