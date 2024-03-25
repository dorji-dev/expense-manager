'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import {
  AuthContextProps,
  useAuth,
} from "@/components/providers/auth-provider";
import { Form, Field } from "react-final-form";
import { FormValidators } from "../../../lib/validationSchema";
import { LoginUser } from "../../../lib/types/config";

const SignInForm = () => {
  const router = useRouter();
  const { loginUser } = useAuth() as AuthContextProps;
  const handleLogin = async (value: LoginUser) => {
    loginUser(value.email, value.password).then(() => {
      router.push("/");
    });
  };

  return (
    <Form onSubmit={handleLogin}>
      {({ handleSubmit, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className='space-y-[20px]'>
              <label className='block font-medium'>
                Email
                <Field
                  name='email'
                  validate={FormValidators.compose(FormValidators.email)}
                  type='email'
                  placeholder='example@gmail.com'
                >
                  {({ input, meta }) => (
                    <Input
                      {...input}
                      className='mt-[8px]'
                      errorMessage={
                        meta?.touched && meta?.error ? meta.error : ""
                      }
                    />
                  )}
                </Field>
              </label>
              <label className='block font-medium'>
                Password
                <Field
                  name='password'
                  type='password'
                  placeholder='Enter your password'
                  validate={FormValidators.compose(FormValidators.minLength(8))}
                >
                  {({ input, meta }) => (
                    <Input
                      {...input}
                      className='mt-[8px]'
                      errorMessage={
                        meta?.touched && meta?.error ? meta.error : ""
                      }
                    />
                  )}
                </Field>
              </label>
            </div>
            <Link
              href='/forgot-password'
              className='underline text-muted-foreground text-[12px] mt-[16px] block'
            >
              Forgot your password?
            </Link>
            <div className='flex items-center gap-[10px] my-[24px]'>
              <Field name='terms'>
                {({ input }) => (
                  <Checkbox
                    name={input.name}
                    value={input.value}
                    checked={input.checked}
                    onChange={input.onChange}
                    onCheckedChange={(value) => input.onChange(value)}
                    className='h-[20px] w-[20px] border-foreground/30 shadow-none'
                    aria-label='Remember this device'
                  />
                )}
              </Field>
              <span tabIndex={0}>Remember this device</span>
            </div>
            <Button type='submit' disabled={!values?.terms} className='w-full'>
              Login
            </Button>
          </form>
        );
      }}
    </Form>
  );
};

export default SignInForm;
function loginUser(userInfo: { email: string; password: string }) {
  throw new Error("Function not implemented.");
}

