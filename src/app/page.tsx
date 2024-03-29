import AddNewExpense from "@/components/add-new-expense";
import SignIn from "@/components/auth/sign-in";
import SignUp from "@/components/auth/sign-up";
import LandingPage from "@/components/landing-page";

export default function Index() {
  return (
    <main>
      <LandingPage />
      <SignIn />
      <SignUp />
      <AddNewExpense />
    </main>
  );
}
