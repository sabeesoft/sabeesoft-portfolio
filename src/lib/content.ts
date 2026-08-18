import type { LucideIcon } from "lucide-react";
import { Code2, BrainCircuit, Smartphone, Cloud } from "lucide-react";
import type { ServiceId } from "@/lib/i18n/types";

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  web: Code2,
  ai: BrainCircuit,
  mobile: Smartphone,
  cloud: Cloud,
};

// Technology and product names are proper nouns and stay identical across locales.
export const techStack = [
  "React",
  "TypeScript",
  "Flutter",
  "Java",
  "Quarkus",
  "NestJS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Kafka",
  "Kubernetes",
  "AWS",
];
