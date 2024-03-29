"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { TbMenu } from "react-icons/tb";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { NAVIGATION_CONFIG } from "@/config/navigation";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const defaultNavs = NAVIGATION_CONFIG.filter((nav) => nav.type === "default");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        asChild
        className="mr-[8px] px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      >
        <Button variant="ghost" aria-label="Open navigation menu">
          <TbMenu className="w-[24px] h-[24px]" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 pt-[36px]">
        <ScrollArea className="my-[16px] h-[calc(100dvh-112px)] pb-[40px] pr-[20px]">
          <nav className="flex flex-col space-y-[16px]">
            {defaultNavs.map((nav) => (
              <Link
                key={nav.title}
                href={nav.href}
                onClick={() => setOpen(false)}
              >
                {nav.title}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
