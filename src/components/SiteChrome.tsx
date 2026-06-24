"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

/**
 * App shell shared across every route. Computes the dark "gallery" theme
 * for the work index and project pages, mirroring the original prototype.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDark = pathname.startsWith("/work");

  return (
    <div className={`app ${isDark ? "dark" : ""}`}>
      <Header dark={isDark} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
