import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Slot } from '@radix-ui/react-slot';

const inputVariants = cva(
  'flex items-center border gap-2.5 bg-white p-2  rounded-sm border text-body-13 text-normal border-solid border-input-default-gray focus:outline-0 !focus:outline-offset-0',
  {
    variants: {
      variant: {
        default: 'w-96 justify-center rounded border bg-white h-14',
        primary: 'w-56 h-9 self-stretch rounded bg-white',
        secondary: 'h-9 w-20 text-right text-input-default-textGray',
        icon: 'h-3.5 w-3.5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'input';
    return (
      <Comp
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants };
