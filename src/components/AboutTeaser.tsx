import Image from "next/image";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="teaser">
      <div className="img">
        <Image
          src="https://images.unsplash.com/photo-1554080353-a576cf803bda?w=1200"
          alt="A quiet, warm-toned frame from a recent shoot"
          fill
          sizes="(max-width: 860px) 100vw, 50vw"
        />
      </div>
      <div>
        <div className="eyebrow">About</div>
        <h2>
          I shoot stills and motion <span className="ital">— usually both.</span>
        </h2>
        <p>
          Independent photographer and filmmaker, based in Washington, DC and on the road as needed.
          I work small: just me, the camera, and whatever the project asks for.
        </p>
        <Link href="/about" className="cta">
          More about me ↗
        </Link>
      </div>
    </section>
  );
}
