import * as React from "react"

import { cn } from "@/lib/utils/misc"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <>
        <textarea
          className={cn(
            "flex min-h-[100px] w-full rounded-[10px] border border-input bg-transparent px-[12px] py-[8px] shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
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
Textarea.displayName = "Textarea"

export { Textarea }
