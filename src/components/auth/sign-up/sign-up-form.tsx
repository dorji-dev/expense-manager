"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Form, Field } from "react-final-form";
import { FormValidators } from "../../../lib/validationSchema";
import { NewUser } from "../../../lib/types/config";
import { AuthContextProps, useAuth } from "../../providers/auth-provider";

const SignUpForm = () => {
  const router = useRouter();
  const { registerUser } = useAuth() as AuthContextProps;

  const handleSignup = async (value: NewUser) => {
    registerUser(value.email, value.password, value.name);
    router.push("/login");
  };

  return (
    <Form onSubmit={handleSignup}>
      {({ handleSubmit, values, submitFailed }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className='space-y-[20px]'>
              <label className='block font-medium'>
                Name
                <Field
                  name='name'
                  validate={FormValidators.compose(
                    FormValidators.required,
                    FormValidators.minLength(4)
                  )}
                  type='text'
                  placeholder='Enter your name'
                >
                  {({ input, meta }) => (
                    <>
                      <Input
                        {...input}
                        className='mt-[8px]'
                        errorMessage={
                          meta?.touched && meta?.error ? meta.error : ""
                        }
                      />
                    </>
                  )}
                </Field>
              </label>
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

              <label className='block font-medium'>
                Confirm Password
                <Field
                  name='confirmpassword'
                  type='password'
                  placeholder='Confirm your password'
                  validate={(value) => {
                    if (value !== values.password) {
                      return "Password do not match!";
                    }
                  }}
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

              <span tabIndex={0}>
                I agree to the termss of service and Privacy policy.
              </span>
            </div>
            <Button type='submit' disabled={!values?.terms} className='w-full'>
              Sign up
            </Button>
          </form>
        );
      }}
    </Form>
  );
};

export default SignUpForm;
