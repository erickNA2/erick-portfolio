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
  title: 'text-[5.5rem] uppercase text-balance font-[Copperplate] tracking-wide text-white',
  subtitle: 'text-[1.25rem] text-black font-[Avenir] text-white',
  body: 'text-base text-white font-[Helvetica]',
  caption: 'text-sm text-gray-300',
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
