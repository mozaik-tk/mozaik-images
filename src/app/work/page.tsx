import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected photography and motion projects — 2024–2026.",
};

export default function WorkPage() {
  return <WorkGrid items={PROJECTS} />;
}
