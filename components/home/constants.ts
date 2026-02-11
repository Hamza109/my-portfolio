import {
  Database,
  Palette,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import type { Capability, NavItem, StackTech } from "@/components/home/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
  { label: "About Me", href: "#about-me" },
  { label: "Contact", href: "#contact" },
];

export const CAPABILITIES: Capability[] = [
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

export const STACK_WITH_ICONS: StackTech[] = [
  { name: "React Native", icon: "/stack-icons/react-native.svg" },
  { name: "React.js", icon: "/stack-icons/react.svg" },
  { name: "Next.js", icon: "/stack-icons/nextjs.svg" },
  { name: "TypeScript", icon: "/stack-icons/typescript.svg" },
  { name: "Redux Toolkit", icon: "/stack-icons/redux.svg" },
  { name: "Expo", icon: "/stack-icons/expo.svg" },
  { name: "Node.js", icon: "/stack-icons/nodejs.svg" },
  { name: "Express.js", icon: "/stack-icons/expressjs.svg" },
  { name: "Prisma ORM", icon: "/stack-icons/prisma.svg" },
  { name: "MySQL", icon: "/stack-icons/mysql.svg" },
  { name: "Laravel", icon: "/stack-icons/laravel.svg" },
  { name: "FastAPI", icon: "/stack-icons/fastapi.svg" },
  { name: "REST APIs", icon: "/stack-icons/rest.svg" },
  { name: "WebSockets", icon: "/stack-icons/websockets.svg" },
  { name: "JWT", icon: "/stack-icons/jwt.svg" },
  { name: "Docker", icon: "/stack-icons/docker.svg" },
  { name: "GitHub Actions", icon: "/stack-icons/github-actions.svg" },
  { name: "Firebase", icon: "/stack-icons/firebase.svg" },
  { name: "Qdrant", icon: "/stack-icons/qdrant.svg" },
  { name: "OpenAI API", icon: "/stack-icons/openai.svg" },
];
