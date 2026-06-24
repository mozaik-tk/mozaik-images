import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mozaik Images — call, text, email, or Instagram.",
};

const CONTACTS = [
  { label: "Email", value: "hello@mozaikimages.com", href: "mailto:hello@mozaikimages.com" },
  { label: "Phone", value: "+1 (571) 400-9588", href: "tel:+15714009588" },
  {
    label: "Instagram",
    value: "@timelessuset",
    href: "https://www.instagram.com/timelessuset",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <section className="contact-wrap">
      <div className="eyebrow">Contact</div>
      <h1>
        Tell me about <span className="ital">the project.</span>
      </h1>
      <div className="contact-options">
        {CONTACTS.map((c) => (
          <a
            key={c.label}
            className="contact-row"
            href={c.href}
            {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <div className="label">
              <span className="dim">{c.label}</span>
              {c.value}
            </div>
            <span className="arr">↗</span>
          </a>
        ))}
      </div>
      <p className="contact-foot">
        Best way to reach me is a phone call or text message — I read everything and reply within
        minutes. For quick looks at recent work, follow along on Instagram. No booking forms yet; I
        prefer a real conversation first.
      </p>
    </section>
  );
}
