"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { BackgroundAccents } from "@/components/home/BackgroundAccents";
import { TopNav } from "@/components/home/TopNav";
import { OverviewSection } from "@/components/home/sections/OverviewSection";
import {
  CAPABILITIES,
  NAV_ITEMS,
  STACK_WITH_ICONS,
} from "@/components/home/constants";

const ProjectsSection = dynamic(
  () =>
    import("@/components/home/sections/ProjectsSection").then(
      (m) => m.ProjectsSection
    ),
  { ssr: true }
);

const StackSection = dynamic(
  () =>
    import("@/components/home/sections/StackSection").then(
      (m) => m.StackSection
    ),
  { ssr: true }
);

const JourneySection = dynamic(
  () =>
    import("@/components/home/sections/JourneySection").then(
      (m) => m.JourneySection
    ),
  { ssr: true }
);

const AboutSection = dynamic(
  () => import("@/components/home/sections/AboutSection").then((m) => m.AboutSection),
  { ssr: true }
);

const ContactSection = dynamic(
  () =>
    import("@/components/home/sections/ContactSection").then(
      (m) => m.ContactSection
    ),
  { ssr: true }
);

const FeedbackDialog = dynamic(
  () => import("@/components/home/FeedbackDialog").then((m) => m.FeedbackDialog),
  { ssr: false }
);

export default function HomePage() {
  const data = portfolioData;
  const year = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackQueued, setFeedbackQueued] = useState(false);
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const feedbackTriggeredRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const seen = window.localStorage.getItem("portfolio_feedback_seen");
      if (seen === "true") {
        feedbackTriggeredRef.current = true;
        return;
      }
    }

    const contactNode = document.getElementById("contact");
    if (!contactNode || feedbackTriggeredRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || feedbackTriggeredRef.current) return;
        feedbackTriggeredRef.current = true;
        setFeedbackQueued(true);
        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(contactNode);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!feedbackQueued || feedbackOpen) return;

    feedbackTimerRef.current = setTimeout(() => {
      setFeedbackOpen(true);
      setFeedbackQueued(false);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("portfolio_feedback_seen", "true");
      }
    }, 2000);

    return () => {
      if (feedbackTimerRef.current) {
        clearTimeout(feedbackTimerRef.current);
      }
    };
  }, [feedbackQueued, feedbackOpen]);

  return (
    <main className='relative min-h-screen overflow-x-hidden bg-gradient-to-b from-[#030712] via-[#020617] to-[#020617] text-white'>
      <BackgroundAccents prefersReducedMotion={!!prefersReducedMotion} />

      <div className='relative z-10 flex min-h-screen flex-col'>
        <TopNav name={data.name} navItems={NAV_ITEMS} contact={data.contact} />

        <div className='relative flex-1'>
          <OverviewSection
            data={data}
            capabilities={CAPABILITIES}
            prefersReducedMotion={!!prefersReducedMotion}
          />
          <ProjectsSection projects={data.projects} />
          <StackSection
            stack={STACK_WITH_ICONS}
            prefersReducedMotion={!!prefersReducedMotion}
          />
          <JourneySection experience={data.experience} />
          <AboutSection />
          <ContactSection
            name={data.name}
            year={year}
            contact={data.contact}
          />
        </div>
      </div>

      <FeedbackDialog
        open={feedbackOpen}
        onOpenChange={setFeedbackOpen}
        contact={data.contact}
        prefersReducedMotion={!!prefersReducedMotion}
      />
    </main>
  );
}
