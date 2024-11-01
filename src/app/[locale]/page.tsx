import MainHeader from '@/components/shared/headers/main-header';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  const currentYear = new Date().getFullYear();

  return (
    <>
      <MainHeader />
      <main className="mt-[81px]">
        <div className="h-[calc(100vh-81px)] flex sm:items-center justify-center px-2 sm:px-6">
          <div className="sm:max-w-3xl w-full bg-card text-card-foreground sm:shadow-lg sm:rounded-lg p-2 sm:p-8 space-y-8 pt-4">
            {/* Welcome Section */}
            <section className="text-center space-y-4">
              <h1 className="text-3xl font-bold ">{t('title')}</h1>
              <p className="text-muted-foreground text-lg">{t('welcomeMessage')}</p>
            </section>

            {/* Features Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-center">{t('featuresTitle')}</h2>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside px-4">
                <li>{t('features.blockWebsites')}</li>
                <li>{t('features.urlManagement')}</li>
                <li>{t('features.adminDashboard')}</li>
              </ul>
            </section>

            {/* Call to Action */}
            <div className="text-center pt-4 space-y-4">
              <Button variant="default" asChild size="lg">
                <Link href="/sign-up">{t('signUp')}</Link>
              </Button>
              <div className="flex items-center justify-center w-full sm:w-1/2 mx-auto">
                <span className="border-t border-gray-300 flex-grow mr-3"></span>
                <p>{t('or')}</p>
                <span className="border-t border-gray-300 flex-grow ml-3"></span>
              </div>
              <Button variant="outline" asChild size="lg">
                <Link href="/dashboard">{t('goToDashboard')}</Link>
              </Button>
            </div>

            {/* Footer Section */}
            <footer className="text-center text-gray-500 text-sm pt-8 border-t">
              <p>{t('footerText', { year: currentYear })}</p>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}
