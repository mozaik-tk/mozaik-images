"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "./LogoMark";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

interface HeaderProps {
  dark?: boolean;
}

export default function Header({ dark = false }: HeaderProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`hdr ${dark ? "dark" : ""}`}>
      <Link href="/" className="hdr-logo" aria-label="Mozaik Images — home">
        <LogoMark />
        <span className="word">
          mozaik <span className="dim">images</span>
        </span>
      </Link>
      <nav className="hdr-nav">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="/contact" className="hdr-cta">
        Get in touch ↗
      </Link>
    </header>
  );
}
