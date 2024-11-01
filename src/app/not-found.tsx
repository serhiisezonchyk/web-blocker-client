'use client';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/shared/consts/routs';
import { Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`antialiased sm:bg-primary/5`}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-background px-2">
          <h1 className="text-4xl font-bold mb-4 text-primary text-center">404 - Page not found ({pathname})</h1>
          <Button asChild>
            <Link href={ROUTES.HOME}>
              Home <Home />
            </Link>
          </Button>
        </div>
      </body>
    </html>
  );
}
