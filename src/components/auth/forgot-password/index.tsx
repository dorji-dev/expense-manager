"use client";
import React from "react";
import { Field, Form } from "react-final-form";
import { Input } from "../../ui/input";
import { FormValidators } from "../../../lib/validationSchema";
import { Button } from "../../ui/button";
import Link from "next/link";

const ForgotPassword = () => {
  const handleSubmit = () => {};
  return (
    <div className='auth_form_container'>
      <div className='space-y-[20px]'>
        <h4 className='font-bold'>Did you forget your password?</h4>
        <p>
          No worries. Just enter your email and we’ll send you instructions to
          reset it.
        </p>
      </div>
      <div className='mt-[20px]'>
        <Form onSubmit={handleSubmit}>
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
                  <Button
                    type='submit'
                    disabled={!values?.email}
                    className='w-full'
                  >
                    Send link
                  </Button>
                </div>
              </form>
            );
          }}
        </Form>
        <Link className='mt-[10px] flex justify-end text-primary' href='/login'>
          back to login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
