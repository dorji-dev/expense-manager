import AddNewExpense from "@/components/expenses/add-new-expense";
import SignIn from "@/components/auth/sign-in";
import SignUp from "@/components/auth/sign-up";
import ExpenseListing from "@/components/expenses/expense-listing";
import LandingPage from "@/components/landing-page";
import ExpenseCategories from "@/components/categories";

export default function Index() {
  return (
    <main>
      <LandingPage />
      <SignIn />
      <SignUp />
      <AddNewExpense />
      <ExpenseListing />
      <ExpenseCategories />
    </main>
  );
}
