'use client';

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = 'none' | 'primary' | 'secondary' | 'success' | 'danger' | 'outlined';

type Size = 'sm' | 'md' | 'lg' | 'full';

type Rounded = 'sm' | 'md' | 'lg' | 'full';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: Variant;
  size: Size;
  rounded: Rounded;
  className?:string;
};

export default function Button({
  children,
  variant,
  size = 'md',
  rounded = 'lg',
  className = '',
  ...props
}:ButtonProps) {
  const baseClasses = 'text-center w-fit text-sm transition-colors duration-200';

  const variantClasses = {
    none: "",
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-secondary hover:bg-secondary-hover',
    success: 'bg-success text-white hover:bg-success-hover',
    danger: 'bg-danger text-white hover:bg-danger-hover',
    outlined: 'border border-outlined hover:bg-outlined-hover',
  };

  const sizeClasses = {
    sm: 'px-3',
    md: 'px-4',
    lg: 'px-6',
    full: 'px-auto w-full'
  };

  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  const classes = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${roundedClasses[rounded]} 
    ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
