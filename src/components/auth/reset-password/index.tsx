"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { Field, Form } from "react-final-form";
import { FormValidators } from "../../../lib/validationSchema";
import { Button } from "../../ui/button";
import { AuthContextProps, useAuth } from "../../providers/auth-provider";
import { useRouter, useSearchParams } from "next/navigation";
import { ToastClose } from "../../ui/toast";
import { toast } from "../../ui/use-toast";

const ResetPassword = () => {
  const router = useRouter();
  const { resetPassword } = useAuth() as AuthContextProps;
  const searchParams = useSearchParams();

  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");

  const handleResetPassword = async (formData: { password: string }) => {
    await resetPassword(userId ?? "", secret ?? "", formData.password)
      .then(() => {
        toast({
          description: "Successful",
          action: <ToastClose />,
        });
        router.push("/login");
      })
      .catch((error) => {
        toast({
          description: error.response.message,
          action: <ToastClose />,
        });
      });
  };
  return (
    <div className='auth_form_container w-full'>
      <Form onSubmit={handleResetPassword}>
        {({ handleSubmit, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className='space-y-[20px]'>
                <label className='block font-medium'>
                  Password
                  <Field
                    name='password'
                    type='password'
                    placeholder='Enter your password'
                    validate={FormValidators.compose(
                      FormValidators.minLength(8)
                    )}
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

              <Button type='submit' className='w-full mt-[20px]'>
                Reset password
              </Button>
            </form>
          );
        }}
      </Form>
    </div>
  );
};

export default ResetPassword;
