interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  icon?: JSX.Element;
}

interface SocialLinkItem {
  href: string;
  icon: string;
  alt: string;
}

import { Search } from "@lucide/astro";

export const siteConfig = {
  title: "Astro",
  description:
    "A modern frontend developer portfolio built with Astro, Tailwind CSS, and Lucide icons.",
  logo: "/logo.svg",
  onlyLogo: false,
  pageLength: 6,
  year: new Date().getFullYear(),
};

//navigation
export const navigation: NavigationItem[] = [
  // { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Contact", href: "/contact", current: false },
  // { name: "Features", href: "/features", current: false },
  // { name: "Meals", href: "/meals", current: false },
  // { name: "Pricing", href: "/pricing", current: false },
  { name: "Teams", href: "/teams", current: false },
  { name: "Search", href: "/search", current: false, icon: Search },
];

//social share
export const socialLinks: SocialLinkItem[] = [
  {
    href: "https://facebook.com/jameeronline",
    icon: "brands/facebook",
    alt: "Facebook",
  },
  {
    href: "https://instagram.com/jameeronline",
    icon: "brands/instagram",
    alt: "Instagram",
  },
  {
    href: "https://x.com/jameeonline",
    icon: "brands/x",
    alt: "X",
  },
  {
    href: "https://github.com/jameeronline",
    icon: "brands/instagram",
    alt: "Instagram",
  },
  {
    href: "https://linkedin.com/jameeronline",
    icon: "brands/linkedin",
    alt: "LinkedIn",
  },
];
