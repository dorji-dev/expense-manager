import { NAVIGATION_CONFIG } from "@/config/navigation";
import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  const desktopNav = NAVIGATION_CONFIG.filter((nav) => nav.type === "default");

  return (
    <nav className="hidden md:block space-x-[20px]">
      {desktopNav.map((nav) => (
        <Link href={nav.href} key={nav.title}>
          {nav.title}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
