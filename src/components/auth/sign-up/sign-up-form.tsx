"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <form>
      <div className="space-y-[20px]">
        <label className="block font-medium">
          Name{" "}
          <Input
            type="text"
            placeholder="Enter your name"
            className="mt-[8px]"
          />
        </label>
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
      <div className="flex items-center gap-[10px] my-[24px]">
        <Checkbox
          className="h-[20px] w-[20px] border-foreground/30 shadow-none"
          aria-label="Remember this device"
        />{" "}
        <span tabIndex={0}>
          I agree to the Terms of service and Privacy policy.
        </span>
      </div>
      <Button type="submit" className="w-full">
        Sign up
      </Button>
    </form>
  );
};

export default SignUpForm;
