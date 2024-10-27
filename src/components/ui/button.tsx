import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium ring-offset-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        card: 'border border-transparent bg-vivid-blue text-white hover:bg-charcoal-gray data-[active=true]:border-charcoal-gray data-[active=true]:bg-white data-[active=true]:text-charcoal-gray data-[active=true]:hover:bg-charcoal-gray data-[active=true]:hover:text-white sm:text-lg md:text-xl',
        nav: 'border border-light-gray bg-transparent text-medium-gray hover:bg-whisper-gray active:text-charcoal-gray max-xs:text-sm',
        banner:
          'bg-white text-lg font-semibold text-charcoal-gray hover:bg-charcoal-gray hover:text-white active:bg-whisper-gray active:text-vivid-blue disabled:bg-whisper-gray disabled:text-vivid-blue lg:text-xl',
        square:
          'border border-light-gray bg-white text-5xl text-medium-gray [&_svg]:size-6',
        readMore:
          'h-[unset] bg-transparent text-black underline hover:no-underline',
        unset: ''
      },
      size: {
        card: 'h-12 px-4 md:h-[58px] md:px-8',
        nav: 'h-7 px-4 xs:h-9',
        square: 'size-10 lg:size-[58px]',
        readMore: 'text-base',
        unset: ''
      }
    },
    defaultVariants: {
      variant: 'unset',
      size: 'unset'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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

export { Button };
