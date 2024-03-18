import Link from "next/link";
import SignInForm from "./sign-in-form";
import { buttonVariants } from "@/components/ui/button";
import clsx from "clsx";

const SignIn = () => {
  return (
    <div className="mt-[100px] max-w-[400px] px-[20px] xs:px-0 mx-auto">
      <div className="space-y-[20px]">
        <h4 className="font-bold">Welcome back to SpendWise</h4>
        <p>Log in to your account to track your spending and save more.</p>
      </div>
      <div className="mt-[20px]">
        <SignInForm />
      </div>
      <div className="mt-[24px] space-y-[20px]">
        <p className="text-muted-foreground text-center">
          Don't have an account?
        </p>
        <Link
          href="/"
          className={clsx(buttonVariants({ variant: "secondary" }), "w-full")}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
