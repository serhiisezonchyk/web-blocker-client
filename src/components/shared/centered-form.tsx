import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type Props = { title: string; className?: string } & PropsWithChildren;

const CenteredForm = (props: Props) => {
  return (
    <div className={cn('flex flex-col pt-24', props.className)}>
      <div className="sm:rounded-md sm:border sm:border-border px-2 sm:px-14 py-8 w-full sm:max-w-[400px] sm:bg-background self-center space-y-2">
        <h1 className="text-xl sm:text-2xl mb-2 text-center ">{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
};

export default CenteredForm;
