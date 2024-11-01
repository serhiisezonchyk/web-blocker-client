import MainHeader from '@/components/shared/headers/main-header';
import { redirect } from '@/i18n/routing';
import { getServerSessionInfo } from '@/lib/get-server-session';
import { ROUTES } from '@/shared/consts/routs';
import { getLocale } from 'next-intl/server';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await getServerSessionInfo();
  if (res?.email) {
    const locale = await getLocale();
    redirect({ href: ROUTES.MANAGE, locale });
  }
  return (
    <>
      <MainHeader />
      <main className="mt-[81px]">{children}</main>
    </>
  );
}
