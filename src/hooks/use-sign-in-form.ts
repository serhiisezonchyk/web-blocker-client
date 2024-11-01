import { useRouter } from '@/i18n/routing';
import { authControllerSignIn } from '@/shared/api/generated';
import { ROUTES } from '@/shared/consts/routs';
import { signInSchema, SignInSchemaType } from '@/validation/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const useSignInForm = () => {
  const t = useTranslations('SignInForm');
  const router = useRouter();

  const errorMessages: Record<number | 'default', string> = {
    429: t('errors.tooManyRequests'),
    default: t('errors.invalidCredentials'),
  };

  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onError(error: any) {
      const statusCode = error?.response?.status;
      const message = errorMessages[statusCode] || errorMessages.default;
      toast.error(message);
      form.resetField('password');
    },
    onSuccess() {
      toast.success(t('success.welcome'));
      router.push(ROUTES.MANAGE);
    },
  });

  function onSubmit(values: SignInSchemaType) {
    signInMutation.mutate(values);
  }

  return {
    form,
    onSubmit,
    isLoading: signInMutation.isPending,
  };
};

export default useSignInForm;
