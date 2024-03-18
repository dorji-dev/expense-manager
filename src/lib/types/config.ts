export type NavigationConfigModel = {
  title: string;
  href: string;
  type: "default" | "primary" | "secondary";
  private: boolean;
}[];

export type FooterNavLinks = {
  title: string;
  nav: {
    title: string;
    href: string;
  }[];
}[];
