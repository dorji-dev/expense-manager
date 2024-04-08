import Budgets from "@/components/budgets";
import LandingPage from "@/components/landing-page";
import SpendingReport from "@/components/spending-report";

export default function Index() {
  return (
    <main>
      <LandingPage />
      <Budgets />
      <SpendingReport />
    </main>
  );
}
