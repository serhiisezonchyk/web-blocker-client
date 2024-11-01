'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import PasswordInput from '@/components/ui/password-input';
import useSignUpForm from '@/hooks/use-sign-up-form';
import { useTranslations } from 'next-intl';

type Props = {};

const SignUpForm = (props: Props) => {
  const { form, onSubmit, isLoading } = useSignUpForm();
  const t = useTranslations('SignUpForm');

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>{t('emailLabel')}</FormLabel>
              <FormControl>
                <Input placeholder={t('emailPlaceholder')} {...field} />
              </FormControl>
              <FormMessage className="absolute top-16" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>{t('passwordLabel')}</FormLabel>
              <FormControl>
                <PasswordInput placeholder={t('passwordPlaceholder')} {...field} />
              </FormControl>
              <FormMessage className="absolute top-16" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="checkPassword"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>{t('repeatPasswordLabel')}</FormLabel>
              <FormControl>
                <PasswordInput placeholder={t('repeatPasswordPlaceholder')} {...field} />
              </FormControl>
              <FormMessage className="absolute top-16" />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit" className="w-full">
          {t('signUpButton')}
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
