import { FaMoneyCheckDollar } from "react-icons/fa6";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import { NAVIGATION_CONFIG } from "@/config/navigation";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import clsx from "clsx";

const SiteHeader = () => {
  const primaryNav = NAVIGATION_CONFIG.filter(
    (nav) => nav.type === "primary"
  )[0];

  return (
    <header className="sticky container h-[56px] flex justify-between items-center top-0 z-50 w-full border-b-[2px] border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="/" className="flex items-center">
        <FaMoneyCheckDollar className="mr-[12px]" />
        <span className="font-[600]">SpendWise</span>
      </Link>
      <div className="flex space-x-[20px] items-center">
        <DesktopNav />
        <div className="flex space-x-[20px]">
          <Link
            href={primaryNav.href}
            key={primaryNav.title}
            className={clsx(
              buttonVariants({
                variant: "default",
              })
            )}
          >
            {primaryNav.title}
          </Link>
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default SiteHeader;
