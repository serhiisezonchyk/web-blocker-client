'use client';
import useSignOut from '@/hooks/use-sign-out';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import { Button } from '../ui/button';

type Props = {
  className?: string;
} & PropsWithChildren;

const SignOutButton = (props: Props) => {
  const { isLoading, signOut } = useSignOut();
  return (
    <Button variant={'outline'} className={cn(props.className)} disabled={isLoading} onClick={() => signOut({})}>
      {props.children}
    </Button>
  );
};

export default SignOutButton;
