import { FooterNavLinks, NavigationConfigModel } from "@/lib/types/config";

export const NAVIGATION_CONFIG: NavigationConfigModel = [
  {
    title: "Features",
    href: "/",
    type: "default",
    private: false,
  },
  {
    title: "Pricing",
    href: "/",
    type: "default",
    private: false,
  },
  {
    title: "Resources",
    href: "/",
    type: "default",
    private: false,
  },
  {
    title: "Log In",
    href: "/",
    type: "secondary",
    private: false,
  },
  {
    title: "Sign Up",
    href: "/",
    type: "primary",
    private: false,
  },
  {
    title: "New report",
    href: "/",
    type: "primary",
    private: true,
  },
  {
    title: "Categories",
    href: "/",
    type: "default",
    private: true,
  },
  {
    title: "Settings",
    href: "/",
    type: "default",
    private: true,
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
