'use client';
import ToggleButton from '@/components/shared/toggle-button';
import { protectedPage } from '@/lib/protected-page';
import { useTranslations } from 'next-intl';
import AddBlockItemForm from './_components/add-block-item-form';
import BlockList from './_components/block-list';

const page = () => {
  const t = useTranslations('BlockListPage');

  return (
    <div className="">
      <div className="container mx-auto px-2">
        <div className="pt-2">
          <div className="grid gap-4 sm:gap-2 sm:grid-cols-[200px_1fr]">
            <aside>
              <ToggleButton />
            </aside>
            <div>
              <h1 className="text-2xl mb-8">{t('blockListTitle')}</h1>
              <AddBlockItemForm className="my-8" />
              <BlockList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default protectedPage(page);
