import { useTranslations } from 'next-intl';
import SignOutButton from '../sign-out-button';
import FloatingButtons from './floating-buttons';

interface AuthActionsProps {
  email: string;
}

const AuthActions = ({ email }: AuthActionsProps) => {
  const t = useTranslations('MainHeader');

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mr-2">
      <p className="text-sm">{email}</p>
      <FloatingButtons />
      <SignOutButton className="bg-primary text-primary-foreground sm:bg-inherit sm:text-primary">
        {t('signOut')}
      </SignOutButton>
    </div>
  );
};

export default AuthActions;
