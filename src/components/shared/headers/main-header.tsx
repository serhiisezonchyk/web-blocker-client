'use client';
import Header from '@/components/ui/header';
import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { useQuery } from '@tanstack/react-query';
import AuthActions from './auth-actions';
import GuestActions from './guest-actions';
import MobileMenu from './mobile-menu';

const MainHeader = () => {
  const { data: session } = useQuery({
    queryFn: authControllerGetSessionInfo,
    queryKey: ['session'],
    retry: 0,
  });

  const actions = session?.email ? <AuthActions email={session.email} /> : <GuestActions />;

  return (
    <Header
      right={
        <>
          <div className="hidden sm:flex items-center">{actions}</div>
          <MobileMenu>{actions}</MobileMenu>
        </>
      }
    />
  );
};

export default MainHeader;
