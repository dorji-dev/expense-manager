import { FooterNavLinks, NavigationConfigModel } from "@/lib/types/config";

export const NAVIGATION_CONFIG: NavigationConfigModel = [
  {
    title: "Home",
    href: "/",
    type: "default",
    private: false,
  },
  {
    title: "Reports",
    href: "/reports",
    type: "default",
    private: true,
  },
  {
    title: "Expenses",
    href: "/",
    type: "default",
    private: true,
  },
  {
    title: "Sign Up",
    href: "/",
    type: "primary",
    private: false,
  },
  {
    title: "Categories",
    href: "/category",
    type: "default",
    private: true,
  },
  {
    title: "Settings",
    href: "/setting",
    type: "default",
    private: true,
  },

  {
    title: "Add new",
    href: "/add-new-expense",
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
