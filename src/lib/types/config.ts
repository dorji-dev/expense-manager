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

export type Category = {
  iconName: string;
  categoryName: string;
  amount: number;
  $id: string;
  category: string;
};

export type Expense = {
  $id: string;
  category: string;
  amount: number;
  date: string;
  note: string;
  item: string;
};
