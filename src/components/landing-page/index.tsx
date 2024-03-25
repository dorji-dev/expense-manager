import { LANDING_PAGE_FEATURES } from "@/lib/constants/misc";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn, grayBlurDataValue } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
const LandingPage = () => {
  return (
    <>
      <div className="bg-[url('/images/app_landing.jpg')] bg-center pt-[100px] pb-[20px] md:pb-[40px] bg-cover rounded-[12px] px-[20px] md:px-[40px]">
        <div className='h-full flex flex-col justify-end'>
          <div className='space-y-[20px]'>
            <h2 className='text-white font-extrabold'>
              SpendWise helps you spend smarter and save more.
            </h2>
            <p className='text-white text-[18px] font-extralight'>
              Understanding your spending habits, track recurring expenses, and
              set budgets to meet your financial goals. Whether you're saving
              for a big purchase or just want to be more mindful of your
              spending, SpendWise has you covered.
            </p>
            <div className='flex flex-col space-y-[20px] xs:flex-row xs:space-y-0 xs:space-x-[20px] !mt-[40px]'>
              <Link
                href='/login'
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Login
              </Link>
              <Link
                href='/register'
                className={cn(buttonVariants({ variant: "secondary" }))}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='space-y-[10px] mt-[50px]'>
        <h3 className='font-bold'>
          Features to help you take control of your finances
        </h3>
        <p className='text-[18px] font-light lg:max-w-[70%]'>
          SpendWise's powerful suite of tools makes it easy to understand your
          spending habits and make more informed decisions. Whether you are
          saving for a big purchase or just want to be more mindful of your
          spending, SpendWise has you covered.
        </p>
      </div>
      <div className='grid gap-[20px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-[36px]'>
        {LANDING_PAGE_FEATURES.map((feature) => (
          <div className='space-y-[16px]' key={feature.title}>
            <div className='relative h-[200px]'>
              <Image
                src={feature.image}
                fill
                placeholder='blur'
                blurDataURL={grayBlurDataValue}
                alt='Tracking image'
                className='rounded-[12px] object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
            <div>
              <p className='text-[16px]'>{feature.title}</p>
              <p className='text-foreground/60'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
