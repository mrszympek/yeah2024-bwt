import { cn } from '@/shared/utils';
import * as React from 'react';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          'bg-white peer block w-full rounded-2xl border-primary pt-5 pb-2 px-4 font-medium ring-inset placeholder:text-muted-foreground focus:ring-1 focus:ring-inset focus:ring-ring sm:text-sm sm:leading-6 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed',
          className,
        )}
        autoComplete={type === 'password' ? 'on' : 'off'}
        type={type}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
