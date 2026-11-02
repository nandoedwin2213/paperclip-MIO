import type { HTMLAttributes } from "react";

import { cn } from "../lib/utils";
import { BRAND_MARK_PATH, BRAND_SHORT_NAME } from "../lib/brand";

interface PaperclipLockupProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  decorative?: boolean;
  title?: string;
}

/**
 * The Galeno IA lockup — mark plus wordmark. Colours follow the theme
 * (`currentColor` + primary), so one geometry works on light and dark chrome.
 * Size it with a height class (`h-5`); the wordmark scales with the text size.
 */
export function PaperclipLockup({ decorative = false, title = "Galeno IA", className, ...rest }: PaperclipLockupProps) {
  return (
    <span
      {...rest}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title}
      className={cn("inline-flex items-center gap-2 text-lg font-semibold leading-none tracking-tight", className)}
    >
      <svg viewBox="0 0 24 24" className="h-full w-auto shrink-0 text-primary" fill="none" aria-hidden="true" focusable="false">
        <path d={BRAND_MARK_PATH} stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span aria-hidden="true">
        {BRAND_SHORT_NAME} <span className="text-primary">IA</span>
      </span>
    </span>
  );
}
