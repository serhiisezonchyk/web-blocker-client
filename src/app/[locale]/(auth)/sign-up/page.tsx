import CenteredForm from '@/components/shared/centered-form';
import { Link } from '@/i18n/routing';
import { ROUTES } from '@/shared/consts/routs';
import { useTranslations } from 'next-intl';
import SignUpForm from '../_components/sign-up-form';

type Props = { className?: string };

const page = (props: Props) => {
  const t = useTranslations('SignUpPage');

  return (
    <CenteredForm title={t('title')} className="gap-4">
      <SignUpForm />
      <p className="mt-3 text-center sm:text-end text-sm">
        {t('alreadyHaveAccount')}{' '}
        <Link
          href={ROUTES.SIGN_IN}
          className="underline text-blue-500 hover:text-blue-600 transition-all duration-200 ease-in"
        >
          {t('signInLink')}
        </Link>
      </p>
    </CenteredForm>
  );
};

export default page;
