import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Spinner from '@/components/ui/spinner';
import useBlockItemForm from '@/hooks/use-block-item-form';
import { cn } from '@/lib/utils';
import { AddBlockItemDtoType } from '@/shared/api/generated';
import { PlusCircleIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

type Props = {
  className?: string;
};

const getPlaceholder = (value: AddBlockItemDtoType, t: (key: string) => string): string => {
  switch (value) {
    case 'KeyWord':
      return t('keywordPlaceholder');
    case 'Website':
    default:
      return t('websitePlaceholder');
  }
};

const AddBlockItemForm = (props: Props) => {
  const t = useTranslations('AddBlockItemForm');
  const { form, onSubmit, isLoading, type } = useBlockItemForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('flex gap-2 flex-col sm:flex-row', props.className)}>
        <div className="flex gap-2 w-full">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="grow">
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('typePlaceholder')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(AddBlockItemDtoType).map((el) => (
                      <SelectItem value={el} key={el}>
                        {t(`type.${el}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="data"
            render={({ field }) => (
              <FormItem className="relative grow min-w-[200px]">
                <FormControl>
                  <Input placeholder={getPlaceholder(type, t)} {...field} />
                </FormControl>
                <FormMessage className="absolute -top-8 sm:top-8" />
              </FormItem>
            )}
          />
        </div>

        <Button
          disabled={isLoading}
          type="submit"
          size="icon"
          variant="ghost"
          className="cursor-pointer text-primary hover:text-primary/50 shrink-0 self-center w-full py-2 sm:w-auto sm:self-end"
        >
          {isLoading ? <Spinner /> : <PlusCircleIcon />}
        </Button>
      </form>
    </Form>
  );
};
export default AddBlockItemForm;
