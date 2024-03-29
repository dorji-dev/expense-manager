"use client";
import { NAVIGATION_CONFIG } from "@/config/navigation";
import Link from "next/link";
import React from "react";
import { AuthContextProps, useAuth } from "../providers/auth-provider";
import { Button } from "../ui/button";
import Loader from "../loader";

const DesktopNav = () => {
  const desktopNav = NAVIGATION_CONFIG.filter((nav) => nav.type === "default");
  const { user, isloading, logoutUser } = useAuth() as AuthContextProps;
  if (isloading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const privateNavItems = desktopNav.filter((nav) => nav.private);
  const publicNavItems = desktopNav.filter((nav) => !nav.private);

  return (
    <nav className='hidden md:block space-x-[20px]'>
      {user ? (
        <>
          {publicNavItems.map((nav) => (
            <Link href={nav.href} key={nav.title}>
              {nav.title}
            </Link>
          ))}
          {privateNavItems.map((nav) => (
            <Link href={nav.href} key={nav.title}>
              {nav.title}
            </Link>
          ))}
          <Button onClick={logoutUser}>Logout</Button>
        </>
      ) : (
        <>
          {publicNavItems.map((nav) => (
            <Link href={nav.href} key={nav.title}>
              {nav.title}
            </Link>
          ))}
        </>
      )}
    </nav>
  );
};

export default DesktopNav;
