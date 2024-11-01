import { useAddBlockItemMutation } from '@/queries/block-list';
import { addBlockItemSchema, AddBlockItemSchemaType } from '@/validation/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const useBlockItemForm = () => {
  const t = useTranslations('AddBlockItemForm'); // Assume translations are under 'BlockItemForm' namespace

  const errorMessages: Record<number | 'default', string> = {
    409: t('errors.itemExists'),
    500: t('errors.serverError'),
    default: t('errors.default'),
  };

  const form = useForm<AddBlockItemSchemaType>({
    resolver: zodResolver(addBlockItemSchema),
    defaultValues: {
      type: 'KeyWord',
      data: '',
    },
  });

  const addBlockItemMutation = useAddBlockItemMutation();

  function onSubmit(values: AddBlockItemSchemaType) {
    addBlockItemMutation.mutate(values, {
      onError: (error: any) => {
        const statusCode = error?.response?.status;
        const message = errorMessages[statusCode] || errorMessages.default;
        toast.error(message);
      },
      onSuccess: () => {
        form.resetField('data');
      },
    });
  }

  const type = form.watch('type');

  return {
    form,
    onSubmit,
    isLoading: addBlockItemMutation.isPending,
    type,
  };
};

export default useBlockItemForm;
