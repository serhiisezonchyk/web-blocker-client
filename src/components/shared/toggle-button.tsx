import { Button } from '@/components/ui/button';
import { useToggleBlocking } from '@/hooks/use-toggle-blocking';
import { useTranslations } from 'next-intl';

type Props = {};

const ToggleButton = (props: Props) => {
  const t = useTranslations('ToggleButton');
  const { isBlockingEnabled, toggleBlocking, isLoading, isReady } = useToggleBlocking();

  if (!isReady) return null;

  return (
    <Button disabled={isLoading} onClick={toggleBlocking} variant={isBlockingEnabled ? 'destructive' : 'secondary'}>
      {isBlockingEnabled ? t('disableBlocking') : t('enableBlocking')}
    </Button>
  );
};

export default ToggleButton;
