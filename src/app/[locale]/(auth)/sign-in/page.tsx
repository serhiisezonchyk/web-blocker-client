import CenteredForm from '@/components/shared/centered-form';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ROUTES } from '@/shared/consts/routs';
import { useTranslations } from 'next-intl';
import SignInForm from '../_components/sign-in-form';

type Props = {};

const page = (props: Props) => {
  const t = useTranslations('SignInPage');
  return (
    <CenteredForm title={t('title')} className="gap-4">
      <SignInForm />
      <div className="flex items-center justify-center">
        <span className="border-t border-gray-300 flex-grow mr-3"></span>
        <p>{t('or')}</p>
        <span className="border-t border-gray-300 flex-grow ml-3"></span>
      </div>
      <Button asChild variant="secondary" className="mt-0">
        <Link href={ROUTES.SIGN_UP}>{t('createNew')}</Link>
      </Button>
    </CenteredForm>
  );
};

export default page;
