import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProjectGallery from "@/components/ProjectGallery";
import NextProject from "@/components/NextProject";
import { PROJECTS, getProject } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = getProject(params.id);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.lede,
    openGraph: {
      title: `${project.title} — Mozaik Images`,
      description: project.lede,
      images: [{ url: project.cover }],
    },
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id);
  if (!project) notFound();

  return (
    <>
      <div className="proj-cover">
        <Image src={project.cover} alt={project.title} fill sizes="100vw" priority />
        <div className="inner">
          <div className="eyebrow">
            {project.type} · {project.year} · {project.location}
          </div>
          <h1>{project.title}</h1>
        </div>
      </div>
      <dl className="proj-meta">
        <dt>Type</dt>
        <dd>{project.type}</dd>
        <dt>Year</dt>
        <dd>{project.year}</dd>
        <dt>Location</dt>
        <dd>{project.location}</dd>
        <dt>Notes</dt>
        <dd className="lede">{project.lede}</dd>
      </dl>
      <ProjectGallery images={project.images} title={project.title} />
      <NextProject currentId={project.id} />
    </>
  );
}
