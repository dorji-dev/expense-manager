export type NavigationConfigModel = {
  title: string;
  href: string;
  type: "default" | "primary" | "secondary";
}[];

export type FooterNavLinks = {
  title: string;
  nav: {
    title: string;
    href: string;
  }[];
}[];
