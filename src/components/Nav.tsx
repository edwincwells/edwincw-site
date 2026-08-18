"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";

const baseLinkClass = "text-sm transition-colors duration-[180ms]";
const inactiveClass =
  "text-[var(--color-muted)] hover:text-[var(--color-primary)]";
const activeClass =
  "text-[var(--color-foreground)] underline decoration-1 underline-offset-[3px] decoration-[var(--color-primary)]";

export function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  /* Work and Contact are the nav's two in-page destinations, and the only
     places that want an animated scroll. Handling it here rather than with a
     global `scroll-behavior: smooth` keeps every cross-page navigation landing
     at the top instantly — see the note in globals.css.

     Only intercepts when already on the homepage. From /about or a case study
     the Link navigates normally and the router lands on the anchor, which is
     why both hrefs are rooted (`/#id`) rather than bare fragments. */
  const scrollToAnchor =
    (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname !== "/") return;
      const target = document.getElementById(id);
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
      window.history.replaceState(null, "", `/#${id}`);
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
              <Link
                href="/#selected-work"
                onClick={scrollToAnchor("selected-work")}
                className={`${baseLinkClass} ${inactiveClass}`}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={scrollToAnchor("contact")}
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
