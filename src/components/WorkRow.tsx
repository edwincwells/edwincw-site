import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export type WorkRowProps = {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  linkExternal?: boolean;
  reverse?: boolean;
};

export function WorkRow({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  linkText,
  linkHref,
  linkExternal = false,
  reverse = false,
}: WorkRowProps) {
  const imageShift = reverse
    ? "group-hover:-translate-x-2"
    : "group-hover:translate-x-2";

  return (
    <div className="group grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div className={reverse ? "md:order-2" : ""}>
        <div
          className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-border)]"
          style={{ borderRadius: "var(--radius-lg)" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`object-cover transition-transform duration-[240ms] ease-out group-hover:-translate-y-1 ${imageShift}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <p className="text-eyebrow text-[var(--color-muted)] mb-4">
          {eyebrow}
        </p>
        <h3 className="text-h2 text-[var(--color-foreground)] mb-4 transition-colors duration-[240ms] ease-out group-hover:text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="text-prose text-[var(--color-body)] mb-6">
          {description}
        </p>
        <a
          href={linkHref}
          {...(linkExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="inline-flex items-center gap-2 text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors duration-[180ms]"
        >
          <span>{linkText}</span>
          <ArrowUpRight
            className="w-4 h-4 transition-transform duration-[240ms] ease-out group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
