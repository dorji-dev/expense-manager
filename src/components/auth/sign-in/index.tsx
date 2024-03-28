import Link from "next/link";
import SignInForm from "./sign-in-form";
import { buttonVariants } from '@/components/ui/button';

const SignIn = () => {
  return (
    <div className="form_wrapper">
      <div className="space-y-[20px]">
        <h4 className="font-bold">Welcome back to SpendWise</h4>
        <p>Log in to your account to track your spending and save more.</p>
      </div>
      <div className='mt-[20px]'>
        <SignInForm />
      </div>
      <div className='mt-[24px] space-y-[20px]'>
        <div className='text-muted-foreground text-center'>
          Don't have an account?
          <Link href='/register' className='text-primary ml-[4px]'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
