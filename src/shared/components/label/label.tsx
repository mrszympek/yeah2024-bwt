import { type VariantProps, cva } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '@/shared/utils';
import * as React from 'react';

const labelVariants = cva('text-sm font-medium leading-none');

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    className={cn(labelVariants(), className)}
    ref={ref}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
