import Link from "next/link";
import SignUpForm from "./sign-up-form";
import clsx from "clsx";
import { buttonVariants } from "@/components/ui/button";

const SignUp = () => {
  return (
    <div className="mt-[100px] max-w-[400px] px-[20px] xs:px-0 mx-auto">
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
          className={clsx(buttonVariants({ variant: "secondary" }), "w-full")}
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
