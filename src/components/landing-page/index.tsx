import { LANDING_PAGE_FEATURES } from "@/lib/constants/misc";
import { Button } from "../ui/button";
import Image from "next/image";
import { grayBlurDataValue } from "@/lib/utils";

const LandingPage = () => {
  return (
    <>
      <div className="bg-[url('/images/app_landing.jpg')] bg-center pt-[100px] pb-[20px] md:pb-[40px] bg-cover rounded-[12px] px-[20px] md:px-[40px]">
        <div className="h-full flex flex-col justify-end">
          <div className="space-y-[20px]">
            <h2 className="text-white font-[700]">
              SpendWise helps you spend smarter and save more.
            </h2>
            <p className="text-white text-[18px] font-[200]">
              Understanding your spending habits, track recurring expenses, and
              set budgets to meet your financial goals. Whether you're saving
              for a big purchase or just want to be more mindful of your
              spending, SpendWise has you covered.
            </p>
            <div className="flex flex-col space-y-[20px] xs:flex-row xs:space-y-0 xs:space-x-[20px] !mt-[40px]">
              <Button size="lg">Sign up</Button>
              <Button size="lg" variant="secondary">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-[10px] mt-[50px]">
        <h3 className="font-[900]">
          Features to help you take control of your finances
        </h3>
        <p className="text-[18px] font-[300] lg:max-w-[70%]">
          SpendWise's powerful suite of tools makes it easy to understand your
          spending habits and make more informed decisions. Whether you are
          saving for a big purchase or just want to be more mindful of your
          spending, SpendWise has you covered.
        </p>
      </div>
      <div className="grid gap-[20px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-[36px]">
        {LANDING_PAGE_FEATURES.map((feature) => (
          <div className="space-y-[16px]" key={feature.title}>
            <div className="relative h-[200px]">
              <Image
                src={feature.image}
                fill
                placeholder="blur"
                blurDataURL={grayBlurDataValue}
                alt="Tracking image"
                className="rounded-[12px] object-cover"
              />
            </div>
            <div>
              <p className="text-[16px]">{feature.title}</p>
              <p className="text-foreground/60">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
