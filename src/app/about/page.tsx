import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "A solo photography and motion studio based in Washington, DC — couples, brands, musicians, and magazines.",
};

export default function AboutPage() {
  return (
    <section className="about-wrap">
      <div className="eyebrow">About / 2026</div>
      <h1>
        I&apos;m Mozaik. I make pictures <span className="ital">— still and moving.</span>
      </h1>
      <div className="about-grid">
        <div className="about-photo">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900"
            alt="Portrait of the photographer"
            fill
            sizes="(max-width: 860px) 100vw, 40vw"
          />
        </div>
        <div className="about-body">
          <p className="lede">
            A solo studio out of Washington, DC. I work with couples, brands, musicians, magazines,
            and the occasional friend who needs a portrait that doesn&apos;t lie.
          </p>
          <p>
            I started shooting weddings in 2021, took up motion in 2023, and now do roughly
            half-and-half. Most projects are small — just me, the camera, available light. Some are
            bigger and we crew up.
          </p>
          <p>
            I shoot warm and slow. Skin tones lean golden. I edit my own work. I don&apos;t believe
            in over-promising or under-delivering and I will tell you straight if a project
            isn&apos;t a fit.
          </p>
          <p>Based in Washington, DC, working anywhere.</p>
          <p className="signoff">— M.</p>
        </div>
      </div>
    </section>
  );
}
