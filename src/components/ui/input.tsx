import React from "react";

import { cn } from "@/lib/utils/misc";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            'flex h-[48px] w-full font-normal rounded-[10px] border border-input bg-transparent px-[12px] py-[4px] shadow-sm transition-colors file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        <p className='error'>{props?.errorMessage}</p>
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
