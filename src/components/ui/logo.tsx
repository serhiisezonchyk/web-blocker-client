import { cn } from '@/lib/utils';
import { ROUTES } from '@/shared/consts/routs';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

type PropsIcon = {
  className?: string;
};

export const LogoIcon = (props: PropsIcon) => {
  return <ShieldCheck className={cn('size-10 fill-primary/10 text-primary', props.className)} />;
};

type Props = {
  className?: string;
  withIcon?: boolean;
};

const Logo = ({ className, withIcon = true }: Props) => {
  return (
    <Link href={ROUTES.HOME} className={cn('flex items-center gap-2 text-xl', className)}>
      {withIcon && <LogoIcon />}
      Control
    </Link>
  );
};

export default Logo;
