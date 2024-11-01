'use client';
import { routing, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

type Props = {};

const ToggleLocale = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const onChange = (value: string) => {
    router.replace(`/${value}${pathname.replace(/^\/(en|uk)/, '')}`);
  };
  return (
    <div className="flex divide-x-2 items-center">
      {routing.locales.map((el) => (
        <span key={el} onClick={() => onChange(el)} className={cn('px-3 cursor-pointer', { underline: locale === el })}>
          {el}
        </span>
      ))}
    </div>
  );
};

export default ToggleLocale;
