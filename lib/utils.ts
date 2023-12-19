import { type ClassValue, clsx } from "clsx"
import { twJoin } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twJoin(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}