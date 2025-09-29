import { ReactNode, ElementType } from 'react';
import clsx from 'clsx';
import {Major_Mono_Display, Inter} from 'next/font/google'

const mnDisplayFont = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400"
})

const interFont = Inter({
  subsets: ["latin"],
  weight: "300"
})

type TextVariant = 'title' | 'subtitle' | 'body' | 'caption';

interface TextProps {
  variant?: TextVariant;
  children: ReactNode;
  className?: string | null;
  as?: any;
}

const variantClasses: Record<TextVariant, string> = {
  title: 'text-[5.8rem] md:text-[7rem] captalize text-balance font-[Major_Mono_Display] tracking-wide',
  subtitle: 'text-[1.2rem] md:text-[1.4rem] font-[Major_Mono_Display]',
  body: 'text-[1rem] md:text-[1.1rem] font-[Inter]',
  caption: 'text-[.7rem] md:text-[.8rem] font-[Inter]',
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
