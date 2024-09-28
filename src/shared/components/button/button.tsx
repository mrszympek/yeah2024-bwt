import { type VariantProps, cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { LoaderIcon } from 'lucide-react';
import { cn } from '@/shared/utils';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        outline:
          'border border-primary bg-background text-primary hover:bg-accent',
        destructive:
          'bg-destructive/20 text-destructive-foreground hover:bg-destructive/90',
        destructiveDialog:
          'bg-destructive-foreground text-white hover:bg-destructive-foreground/80',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-light-blue disabled:text-muted-foreground',
        link: 'm-0 p-0 text-primary hover:underline',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        lg: 'h-11 px-8',
        default: 'px-4 py-2',
        sm: 'h-11 px-3',
        icon: 'size-10',
        circle: 'size-8 p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ asChild = false, className, variant, size, loading, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ className, variant, size }))}
        disabled={loading || props.disabled}
        ref={ref}
        {...props}
      >
        {loading ? <LoaderIcon className="animate-spin" /> : props.children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { buttonVariants, Button };
