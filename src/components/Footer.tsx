import { Mail } from "lucide-react";
import { Container } from "./Container";

const iconLinkClass =
  "text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors duration-[180ms]";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <Container>
        <div className="flex items-center justify-between py-8">
          <p className="text-small text-[var(--color-muted)]">
            © 2026 Edwin Collings-Wells
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/edwincw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconLinkClass}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:ed.collings.wells@gmail.com"
              aria-label="Email"
              className={iconLinkClass}
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
