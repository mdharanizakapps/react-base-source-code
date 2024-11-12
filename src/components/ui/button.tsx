import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

export const buttonVariants = cva(
  'flex items-center justify-center items-center hover:bg-primary-blue-3 hover:text-white h-9 w-32 cursor-pointer whitespace-nowrap disabled:pointer-events-none focus:outline-0 !focus:outline-offset-0 gap-2.5 rounded border px-4 py-2 border-solid border-primary-blue-1 ',
  {
    variants: {
      variant: {
        default:
          'bg-white hover:border-0 hover:bg-transparent  focus:border-0 border-0',
        primary: 'bg-primary-blue-1',
        secondary: ' bg-white ',
        link: 'underline-offset-4 hover:underline',
        icon: 'w-11',
      },
      size: {
        default: 'text-body-14 text-primary-blue-1 hover:text-primary-blue-1',
        sm: 'text-body-14 text-white',
        md: 'text-body-14 text-primary-blue-1 hover:text-white',
        lg: '',
        icon: 'w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
