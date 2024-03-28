import Link from "next/link";
import SignUpForm from "./sign-up-form";
import { buttonVariants } from "@/components/ui/button";

const SignUp = () => {
  return (
    <div className="form_wrapper">
      <div className="mb-[20px]">
        <h4 className="font-bold">Create an account</h4>
      </div>
      <div className='mt-[20px]'>
        <SignUpForm />
      </div>
      <div className='mt-[24px] space-y-[20px]'>
        <div className='text-muted-foreground text-center'>
          Already have an account?
          <Link className='text-primary ml-[4px]' href='/login'>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
