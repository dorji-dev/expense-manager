import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="space-y-[30px]">
      <div className="bg-[url('/images/app_landing.jpg')] md:h-[300px] bg-cover rounded-[12px] p-[40px]">
        <div className="h-full flex flex-col justify-end">
          <div className="space-y-[20px]">
            <h1 className="text-[30px] text-white font-[700] md:text-[40px]">
              SpendWise helps you spend smarter and save more.
            </h1>
            <p className="text-white">
              Understanding your spending habits, track recurring expenses, and
              set budgets to meet your financial goals. Whether you're saving for a big purchase or just want to be more mindful of your spending, SpendWise has you covered.
            </p>
            <div className="space-x-[10px]">
              <Button>Sign up</Button>
              <Button variant="secondary">Login</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-[16px]">
        <h2 className="text-[26px] font-[700]">
          Features to help you take control of your finances
        </h2>
        <p>
          SpendWise's powerful suite of tools makes it easy to understand your
          spending habits and make more informed decisions.
        </p>
      </div>
    </main>
  );
}
