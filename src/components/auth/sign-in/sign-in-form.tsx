"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const SignInForm = () => {
  return (
    <form>
      <div className="space-y-[20px]">
        <label className="block font-medium">
          Email{" "}
          <Input
            type="email"
            placeholder="example@gmail.com"
            className="mt-[8px]"
          />
        </label>
        <label className="block font-medium">
          Password{" "}
          <Input
            type="password"
            placeholder="Enter your password"
            className="mt-[8px]"
          />
        </label>
      </div>
      <Link
        href="/"
        className="underline text-muted-foreground text-[12px] mt-[16px] block"
      >
        Forgot your password?
      </Link>
      <div className="flex items-center gap-[10px] my-[24px]">
        <Checkbox
          className="h-[20px] w-[20px] border-foreground/30 shadow-none"
          aria-label="Remember this device"
        />{" "}
        <span tabIndex={0}>Remember this device</span>
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};

export default SignInForm;
