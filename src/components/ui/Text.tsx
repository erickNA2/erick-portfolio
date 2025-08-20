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
  title: 'text-[108px] md:text-[242px] uppercase text-balance font-[Copperplate] tracking-wide text-white',
  subtitle: 'text-4xl text-black font-[Avenir] text-white',
  body: 'text-base text-black font-[Helvetica]',
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
