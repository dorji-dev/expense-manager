import Link from "next/link";
import SignUpForm from "./sign-up-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SignUp = () => {
  return (
    <div className="form_wrapper">
      <div className="mb-[20px]">
        <h4 className="font-bold">Create an account</h4>
      </div>
      <div className="mt-[20px]">
        <SignUpForm />
      </div>
      <div className="mt-[24px] space-y-[20px]">
        <p className="text-muted-foreground text-center">
          Already have an account?
        </p>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
