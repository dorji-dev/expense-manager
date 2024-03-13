import { FOOTER_NAV_LINKS } from "@/config/navigation";
import Link from "next/link";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { Separator } from "../ui/separator";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

const SiteFooter = () => {
  return (
    <footer className="container mt-[50px] border-t py-[50px]">
      <div className="flex flex-col md:flex-row">
        <div className="mb-[20px] md:mr-[40px] md:grow-[1]">
          <Link href="/" className="flex flex-col max-w-max">
            <FaMoneyCheckDollar className="mr-[12px] text-[60px] md:text-[40px]" />
            <span className="font-[600] text-[40px] md:text-[30px]">SpendWise</span>
            <p className="text-foreground/40">Finance at your control.</p>
          </Link>
        </div>
        <div className="grid gap-[20px] xxs:grid-cols-2 sm:grid-cols-3 md:grow-[3]">
          {FOOTER_NAV_LINKS.map((nav) => (
            <div>
              <h4 className="text-[16px] font-[500] mb-[10px]">{nav.title}</h4>
              <div className="flex flex-col space-y-[8px]">
                {nav.nav.map((subNav) => (
                  <Link href={subNav.href} className="text-foreground/60 hover:underline">{subNav.title}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Separator className="my-[20px]" />
      <div className="space-y-[20px] md:flex md:flex-col md:items-center">
        <div className="flex space-x-[20px]">
          <Link
            href="/"
            aria-label="Twitter"
            className="flex justify-center items-center border rounded-full p-[10px] hover:border-foreground transition-colors duration-300"
          >
            <BsTwitterX />
          </Link>
          <Link
            href="/"
            aria-label="Facebook"
            className="flex justify-center items-center border rounded-full p-[10px] hover:border-foreground transition-colors duration-300"
          >
            <SlSocialFacebook />
          </Link>
          <Link
            href="/"
            aria-label="Instagram"
            className="flex justify-center items-center border rounded-full p-[10px] hover:border-foreground transition-colors duration-300"
          >
            <SlSocialInstagram />
          </Link>
        </div>
        <div className="text-[12px] text-foreground/50">
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
