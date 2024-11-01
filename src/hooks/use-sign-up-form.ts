import { useRouter } from '@/i18n/routing';
import { authControllerSignUp } from '@/shared/api/generated';
import { ROUTES } from '@/shared/consts/routs';
import { signUpSchema, SignUpSchemaType } from '@/validation/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const useSignUpForm = () => {
  const t = useTranslations('SignUpForm'); // Assume translations are under 'SignUpForm' namespace
  const router = useRouter();

  const errorMessages: Record<number | 'default', string> = {
    400: t('errors.emailExists'),
    429: t('errors.tooManyAttempts'),
    default: t('errors.default'),
  };

  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      checkPassword: '',
    },
  });

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onError(error: any) {
      const statusCode = error?.response?.status;
      const message = errorMessages[statusCode] || errorMessages.default;
      toast.error(message);
      form.resetField('checkPassword');
      form.resetField('password');
    },
    onSuccess() {
      toast.success(t('success.welcome'));
      router.push(ROUTES.MANAGE);
    },
  });

  function onSubmit(values: SignUpSchemaType) {
    const { checkPassword, ...body } = values;
    signUpMutation.mutate(body);
  }

  return {
    form,
    onSubmit,
    isLoading: signUpMutation.isPending,
  };
};

export default useSignUpForm;
