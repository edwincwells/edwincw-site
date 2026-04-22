import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";

const linkClass =
  "text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors duration-[180ms]";

export function Nav() {
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
              <Link href="/" className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={linkClass}>
                About
              </Link>
            </li>
            <li>
              <a
                href="https://portfolio.edwincw.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} inline-flex items-center`}
              >
                Case Studies
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#contact" className={linkClass}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
