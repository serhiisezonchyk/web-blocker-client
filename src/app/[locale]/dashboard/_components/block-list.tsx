import { Input } from '@/components/ui/input';
import Spinner from '@/components/ui/spinner';
import { useBlockItems } from '@/hooks/use-block-item';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import BlockItem from './block-item';

type Props = {
  className?: string;
};

const BlockList = (props: Props) => {
  const t = useTranslations('BlockList');

  const { isLoading, items, q, setQ } = useBlockItems();
  const isLoader = isLoading;
  const isEmptyArray = !isLoading && items.length === 0;
  const isItems = items.length > 0;
  return (
    <div className={cn('space-y-4', props.className)}>
      <Input value={q} placeholder={t('searchPlaceholder')} className="mb-2" onChange={(e) => setQ(e.target.value)} />
      <div className="space-y-6">
        {isLoader && <Spinner />}
        {isEmptyArray && <p>{t('notFound')}</p>}
        {isItems && items.map((el) => <BlockItem key={el.id} item={el} />)}
      </div>
    </div>
  );
};

export default BlockList;
