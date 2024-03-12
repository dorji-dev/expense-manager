import { FooterNavLinks, NavigationConfigModel } from "@/lib/types/config";

export const NAVIGATION_CONFIG: NavigationConfigModel = [
  {
    title: "Features",
    href: "/",
    type: "default",
  },
  {
    title: "Pricing",
    href: "/",
    type: "default",
  },
  {
    title: "Resources",
    href: "/",
    type: "default",
  },
  {
    title: "Log In",
    href: "/",
    type: "secondary",
  },
  {
    title: "Sign Up",
    href: "/",
    type: "primary",
  },
];

export const FOOTER_NAV_LINKS: FooterNavLinks = [
  {
    title: "Company",
    nav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "About Us",
        href: "/",
      },
      {
        title: "Sitemap",
        href: "/",
      },
    ],
  },
  {
    title: "Solutions",
    nav: [
      {
        title: "Pricing",
        href: "/",
      },
      {
        title: "Partners",
        href: "/",
      },
      {
        title: "Providers",
        href: "/",
      },
    ],
  },
  {
    title: "More",
    nav: [
      {
        title: "Contact Us",
        href: "/",
      },
      {
        title: "Affiliates",
        href: "/",
      },
      {
        title: "Resources",
        href: "/",
      },
    ],
  },
];
