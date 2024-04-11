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
    href: "/expenses",
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
    href: "/expense-category",
    type: "default",
    private: true,
  },
  {
    title: "Settings",
    href: "/setting",
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
        title: "Contact Us",
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
