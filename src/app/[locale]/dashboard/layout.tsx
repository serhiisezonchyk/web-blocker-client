import MainHeader from '@/components/shared/headers/main-header';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainHeader />
      <main className="mt-[81px]">{children}</main>
    </>
  );
}
