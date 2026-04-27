import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  width?: "default" | "narrow";
  className?: string;
};

export function Container({
  children,
  width = "default",
  className = "",
}: ContainerProps) {
  const maxWidth = width === "narrow" ? "max-w-[680px]" : "max-w-[1280px]";
  return (
    <div className={`${maxWidth} mx-auto px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );
}
