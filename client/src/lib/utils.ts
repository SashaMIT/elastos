
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function monitorConnection() {
  window.addEventListener('online', () => {
    console.log('Connection restored')
  })

  window.addEventListener('offline', () => {
    console.log('Connection lost')
  })
}
