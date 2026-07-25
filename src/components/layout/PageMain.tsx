import type { ReactNode } from "react";

interface PageMainProps {
  children: ReactNode;
  /** Extra bottom padding on mobile for fixed buy bars (cheat pages). */
  stickyBar?: boolean;
  className?: string;
}

/** Consistent inner-page shell — responsive top offset for navbar + safe areas. */
export default function PageMain({ children, stickyBar = false, className = "" }: PageMainProps) {
  return (
    <main
      id="main-content"
      className={`page-shell relative z-10 ${stickyBar ? "page-shell--sticky-bar" : ""} ${className}`.trim()}
    >
      {children}
    </main>
  );
}
