"use client";
import { NAVIGATION_CONFIG } from "@/config/navigation";
import Link from "next/link";
import React from "react";
import { AuthContextProps, useAuth } from "../providers/auth-provider";

const DesktopNav = () => {
  const desktopNav = NAVIGATION_CONFIG.filter((nav) => nav.type === "default");
const { user, isloading } = useAuth() as AuthContextProps;
if (isloading) {
  return <div>test loading ....</div>;
}
return (
  <nav className='hidden md:block space-x-[20px]'>
    {desktopNav.map((nav) => (
      <Link href={nav.href} key={nav.title}>
        {nav.title}
      </Link>
    ))}
  </nav>
);
};

export default DesktopNav;
