import { useRouter } from '@/i18n/routing';
import { authControllerSignOut } from '@/shared/api/generated';
import { ROUTES } from '@/shared/consts/routs';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../shared/api/query-client';

const useSignOut = () => {
  const router = useRouter();
  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.push(ROUTES.SIGN_IN);
      queryClient.removeQueries();
    },
  });

  return {
    isLoading: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
  };
};

export default useSignOut;
