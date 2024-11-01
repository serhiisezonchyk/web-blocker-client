import { Link } from '@/i18n/routing';
import { ROUTES } from '@/shared/consts/routs';
import { useTranslations } from 'next-intl';
import FloatingButtons from './floating-buttons';

const GuestActions = () => {
  const t = useTranslations('MainHeader');

  return (
    <div className="flex items-center space-x-4">
      <FloatingButtons />
      <Link href={ROUTES.SIGN_IN}>{t('signIn')}</Link>
    </div>
  );
};

export default GuestActions;
