import Link from "next/link";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr-prompt">
        <h2>
          Have a project <span className="ital">in mind</span>?
        </h2>
        <div className="ftr-actions">
          <Link href="/contact">
            <span>hello@mozaikimages.com</span>
            <span>↗</span>
          </Link>
          <a href="https://www.instagram.com/timelessuset" target="_blank" rel="noreferrer">
            <span>@timelessuset</span>
            <span>↗</span>
          </a>
        </div>
      </div>
      <div className="ftr-meta">
        <span>Mozaik · Washington, DC · {new Date().getFullYear()}</span>
        <span>Independent · est. 2021</span>
      </div>
    </footer>
  );
}
