'use client';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ROUTES } from '@/shared/consts/routs';
import { Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4 text-primary">404 - Page not found ({pathname})</h1>
      <Button asChild>
        <Link href={ROUTES.HOME}>
          Home <Home />
        </Link>
      </Button>
    </div>
  );
}
