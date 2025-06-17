export function textToSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function capitalizeText(text: string): string {
  return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

export function slugify(text: string): string {
  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing whitespace
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove non-word characters except hyphens
    .replace(/--+/g, "-"); // Replace consecutive hyphens with a single hyphen
}

//format date
import { format } from "date-fns";
export function formatDate(
  date: Date | string,
  dateFormat: string = "MMM d, yyyy"
): string {
  return format(new Date(date), dateFormat);
}

//capitalize
export function capitalize(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}
