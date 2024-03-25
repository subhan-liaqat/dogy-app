import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function calculateAge(date) {
  const now = new Date();

  let age = now.getFullYear()- date.getFullYear();

  // Optional adjustment for birthdays not yet passed
  if (
    now.getMonth() < date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() < date.getDate())
  ) {
    age--;
  }

  return age;
}
