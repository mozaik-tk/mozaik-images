import Image from "next/image";
import type { ProjectImage } from "@/lib/data";

type Row =
  | { kind: "one"; a: ProjectImage }
  | { kind: "two"; a: ProjectImage; b: ProjectImage };

function toRows(images: ProjectImage[]): Row[] {
  const rows: Row[] = [];
  let i = 0;
  while (i < images.length) {
    const cur = images[i];
    const next = images[i + 1];
    if (cur.row === "two-a" && next && next.row === "two-b") {
      rows.push({ kind: "two", a: cur, b: next });
      i += 2;
    } else {
      rows.push({ kind: "one", a: cur });
      i += 1;
    }
  }
  return rows;
}

export default function ProjectGallery({
  images,
  title,
}: {
  images: ProjectImage[];
  title: string;
}) {
  const rows = toRows(images);
  return (
    <section className="gallery">
      {rows.map((r, idx) =>
        r.kind === "one" ? (
          <div key={idx} className="gallery-row one">
            <div className="ph">
              <Image src={r.a.url} alt={`${title} — image ${idx + 1}`} fill sizes="(max-width: 860px) 100vw, 1400px" />
            </div>
          </div>
        ) : (
          <div key={idx} className="gallery-row two">
            <div className="ph tall">
              <Image src={r.a.url} alt={`${title} — image ${idx + 1}a`} fill sizes="(max-width: 860px) 100vw, 50vw" />
            </div>
            <div className="ph tall">
              <Image src={r.b.url} alt={`${title} — image ${idx + 1}b`} fill sizes="(max-width: 860px) 100vw, 50vw" />
            </div>
          </div>
        )
      )}
    </section>
  );
}
