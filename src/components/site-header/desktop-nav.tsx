import { NAVIGATION_CONFIG } from "@/config/navigation";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

const DesktopNav = () => {
  const desktopNav = NAVIGATION_CONFIG.filter(
    (nav) => nav.type === "default" || nav.type === "secondary"
  );

  return (
    <nav className="hidden md:block space-x-[20px]">
      {desktopNav.map((nav) => (
        <Link
          href={nav.href}
          key={nav.title}
          className={clsx(
            nav.type === "secondary" && buttonVariants({ variant: "secondary" })
          )}
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
