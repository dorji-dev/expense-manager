import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/images/app_landing.jpg')] bg-center md:h-[400px] bg-cover rounded-[12px] p-[40px]">
        <div className="h-full flex flex-col justify-end">
          <div className="space-y-[20px]">
            <h1 className="text-[36px] text-white font-[700] md:text-[48px]">
              SpendWise helps you spend smarter and save more.
            </h1>
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
        <h2 className="text-[34px] font-[900]">
          Features to help you take control of your finances
        </h2>
        <p className="text-[18px] font-[300] lg:max-w-[70%]">
          SpendWise's powerful suite of tools makes it easy to understand your
          spending habits and make more informed decisions. Whether you are
          saving for a big purchase or just want to be more mindful of your
          spending, SpendWise has you covered.
        </p>
      </div>
      <div className="grid gap-[20px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-[36px]">
        <div className="space-y-[16px]">
          <div className="relative h-[200px]">
            <Image
              src="/images/track.jpg"
              fill
              alt="Tracking image"
              className="rounded-[12px] object-cover"
            />
          </div>
          <div>
            <h4 className="text-[16px]">Track your spending</h4>
            <p className="text-foreground/60">
              See exactly where your money is so you can make informed
              decisions.
            </p>
          </div>
        </div>
        <div className="space-y-[16px]">
          <div className="relative h-[200px]">
            <Image
              src="/images/budgets.jpg"
              fill
              alt="Tracking image"
              className="rounded-[12px] object-cover"
            />
          </div>
          <div>
            <h4 className="text-[16px]">Set budgets</h4>
            <p className="text-foreground/60">
              Stay on top of your finances and avoid overspending with monthly
              budget goals.
            </p>
          </div>
        </div>
        <div className="space-y-[16px]">
          <div className="relative h-[200px]">
            <Image
              src="/images/recurring.jpg"
              fill
              alt="Tracking image"
              className="rounded-[12px] object-cover"
            />
          </div>
          <div>
            <h4 className="text-[16px]">Manage recurring expenses</h4>
            <p className="text-foreground/60">
              Automatically track and categorize repeating payments like
              subscriptions and bills.
            </p>
          </div>
        </div>
        <div className="space-y-[16px]">
          <div className="relative h-[200px]">
            <Image
              src="/images/sync.jpg"
              fill
              alt="Tracking image"
              className="rounded-[12px] object-cover"
            />
          </div>
          <div>
            <h4 className="text-[16px]">Easily sync your accounts</h4>
            <p className="text-foreground/60">
              Connect all your bank accounts in one place for a comprehensive
              view of your finances.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
