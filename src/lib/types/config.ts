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


export type NewUser = {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  terms?: boolean;
};

export type LoginUser = {
  email: string;
  password: string;
  terms?: boolean;
};

export type Category{
  icon?: string;
  name?: string;
  amount?: number;
}