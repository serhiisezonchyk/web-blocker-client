'use client';

import PageSpinner from '@/components/ui/page-spinner';
import { useRouter } from '@/i18n/routing';
import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { ROUTES } from '@/shared/consts/routs';
import { useQuery } from '@tanstack/react-query';
import React, { PropsWithChildren } from 'react';

export function protectedPage<P>(Component: (props: P) => React.ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const { data, isLoading, isError } = useQuery({
      queryFn: authControllerGetSessionInfo,
      queryKey: ['session'],
      retry: 0,
      staleTime: 5 * 60 * 1000,
    });

    React.useEffect(() => {
      if (isError) {
        router.replace(ROUTES.SIGN_IN);
      }
    }, [isError, router]);

    if (isLoading) return <PageSpinner />;

    return <Component {...props} />;
  };
}
