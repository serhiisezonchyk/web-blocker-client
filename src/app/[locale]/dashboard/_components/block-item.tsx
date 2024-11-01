import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRemoveBlockItemMutation } from '@/queries/block-list';
import { BlockItemDto } from '@/shared/api/generated';
import { Trash } from 'lucide-react';

type Props = {
  className?: string;
  item: BlockItemDto;
};

const BlockItem = (props: Props) => {
  const removeBlockItemMutation = useRemoveBlockItemMutation();
  const handleRemove = () => {
    removeBlockItemMutation.mutate(props.item.id);
  };
  return (
    <div className={cn('flex gap-2 rounded-md bg-card items-center px-4 py-2', props.className)}>
      <div>
        <div className="text-lg">{props.item.data}</div>
        <div className="text-sm text-muted-foreground">{props.item.type}</div>
      </div>
      <Button
        variant={'destructive'}
        size={'icon'}
        className="ml-auto"
        disabled={removeBlockItemMutation.isPending}
        onClick={handleRemove}
      >
        <Trash />
      </Button>
    </div>
  );
};

export default BlockItem;
