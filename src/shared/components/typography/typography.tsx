/* eslint-disable perfectionist/sort-objects */
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/shared/utils';
import React from 'react';

interface ITypographyProps extends VariantProps<typeof typographyVariants> {
  element?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  children: React.ReactNode;
  className?: string;
}

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold lg:text-5xl',
      h2: 'scroll-m-20 pb-2 text-3xl font-semibold first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold',
      h4: 'scroll-m-20 text-xl',
      h5: 'scroll-m-20 text-base',
      p: 'text-sm',
      small: 'text-xs',
    },
    color: {
      secondary: 'text-foreground',
      muted: 'text-muted-foreground',
      white: 'text-white',
    },
    size: {
      xs: 'text-xs',
    },
  },
  defaultVariants: {
    variant: 'p',
    color: 'white',
  },
});

export const Typography = ({
  className,
  children,
  element,
  variant,
  color,
  size,
  ...props
}: ITypographyProps) => {
  const TypographyElement = element || variant || 'p';

  return (
    <TypographyElement
      className={cn(typographyVariants({ className, variant, color, size }))}
      {...props}
    >
      {children}
    </TypographyElement>
  );
};
