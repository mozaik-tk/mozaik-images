import Image from "next/image";
import Link from "next/link";
import { PROJECTS, getNextProject } from "@/lib/data";

export default function NextProject({ currentId }: { currentId: string }) {
  const next = getNextProject(currentId);
  const idx = PROJECTS.findIndex((p) => p.id === currentId);

  return (
    <section className="work-section" style={{ paddingTop: 32, borderTop: "1px solid var(--line)" }}>
      <div className="head">
        <span className="lbl">Next project</span>
        <span className="lbl">
          {String(idx + 2).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
        </span>
      </div>
      <Link href={`/work/${next.id}`} className="work-tile wide span-12">
        <div className="img" style={{ aspectRatio: "21 / 9" }}>
          <Image src={next.cover} alt={next.title} fill sizes="100vw" />
        </div>
        <div className="title" style={{ fontSize: 24 }}>
          {next.title}{" "}
          <span
            style={{
              color: "var(--clay-500)",
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              marginLeft: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            View ↗
          </span>
        </div>
        <div className="meta">
          <span>
            {next.type} · {next.location}
          </span>
          <span>{next.year}</span>
        </div>
      </Link>
    </section>
  );
}
