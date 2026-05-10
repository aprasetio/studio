import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import DOMPurify from "dompurify"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Sanitize untrusted HTML before rendering via dangerouslySetInnerHTML */
export function sanitizeHtml(dirty: string): string {
  if (typeof window === "undefined") return dirty
  return DOMPurify.sanitize(dirty, { USE_PROFILES: { html: true } })
}
