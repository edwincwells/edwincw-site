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
              <Link href="/#contact" className={`${baseLinkClass} ${inactiveClass}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
