"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";

const baseLinkClass = "text-sm transition-colors duration-[180ms]";
const inactiveClass =
  "text-[var(--color-muted)] hover:text-[var(--color-primary)]";
const activeClass =
  "text-[var(--color-foreground)] underline decoration-1 underline-offset-[3px] decoration-[var(--color-primary)]";

export function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  /* Contact is the only in-page destination in the nav, and the only place that
     wants an animated scroll. Handling it here rather than with a global
     `scroll-behavior: smooth` keeps every cross-page navigation landing at the
     top instantly — see the note in globals.css.

     Only intercepts when already on the homepage. From /about or a case study
     the Link navigates normally and the router lands on the anchor. */
  const scrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    const target = document.getElementById("contact");
    if (!target) return;

    event.preventDefault();
    /* The old CSS rule was covered by the global reduced-motion reset in
       globals.css; a scrollIntoView call isn't, so it has to ask. */
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    /* replaceState rather than push: this is a move within the current page,
       so it shouldn't cost a back-button press to undo. */
    window.history.replaceState(null, "", "/#contact");
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors duration-[180ms]"
          >
            EC-W
          </Link>
          <ul className="flex items-center gap-6 md:gap-8">
            <li>
              <Link
                href="/about"
                className={`${baseLinkClass} ${isActive("/about") ? activeClass : inactiveClass}`}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="https://portfolio.edwincw.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseLinkClass} ${inactiveClass} inline-flex items-center`}
              >
                Case Studies
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
              </a>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={scrollToContact}
                className={`${baseLinkClass} ${inactiveClass}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
