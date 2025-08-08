// components/Text.tsx
import { ReactNode, ElementType } from 'react';
import clsx from 'clsx';

type TextVariant = 'title' | 'subtitle' | 'body' | 'caption';

interface TextProps {
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const variantClasses: Record<TextVariant, string> = {
  title: 'text-3xl font-bold',
  subtitle: 'text-2xl font-semibold',
  body: 'text-base text-white',
  caption: 'text-sm text-gray-500',
};

export default function Text({
  variant = 'body',
  children,
  className,
  as: Component = 'p',
}: TextProps) {
  return (
    <Component className={clsx(variantClasses[variant], className)}>
      {children}
    </Component>
  );
}
