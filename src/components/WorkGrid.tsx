import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

interface WorkGridProps {
  items: Project[];
  withHead?: boolean;
}

export default function WorkGrid({ items, withHead = true }: WorkGridProps) {
  return (
    <section className="work-section">
      {withHead && (
        <div className="head">
          <span className="title">Selected work</span>
          <span className="lbl">{items.length} Projects · 2024–2026</span>
        </div>
      )}
      <div className="work-grid">
        {items.map((p) => (
          <Link key={p.id} href={`/work/${p.id}`} className={`work-tile ${p.span} ${p.aspect}`}>
            <div className="img">
              <Image
                src={p.cover}
                alt={p.title}
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </div>
            <div className="title">{p.title}</div>
            <div className="meta">
              <span>
                {p.type} · {p.location}
              </span>
              <span>{p.year}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
