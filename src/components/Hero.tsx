import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero hero--cover">
      <Image
        src="/hero.png"
        alt="Mozaik Images — featured photograph"
        fill
        priority
        sizes="100vw"
        className="hero-bg"
      />
      <div className="hero-inner">
        <h1>
          Photography <span className="ital">&amp;</span> motion for people who care how it looks.
        </h1>
        <div className="hero-foot">
          <p>
            Solo studio. Stills and short film. Weddings, brand campaigns, music, travel — the full
            archive lives on Instagram, the considered cuts live here.
          </p>
          <span className="scroll">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
