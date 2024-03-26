import { FaMoneyCheckDollar } from "react-icons/fa6";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import Link from "next/link";

const SiteHeader = () => {
  return (
    <header className='sticky container h-[60px] flex justify-between items-center top-0 z-50 w-full border-b-[2px] border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <Link href='/' className='flex items-center'>
        <FaMoneyCheckDollar className='mr-[12px]' />
        <span className='font-[600]'>SpendWise</span>
      </Link>
      <div className='flex space-x-[20px] items-center'>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default SiteHeader;
