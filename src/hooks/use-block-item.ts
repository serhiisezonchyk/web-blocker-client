import { useBlockListQuery } from '@/queries/block-list';
import { useState } from 'react';
// import { useDebounce } from './general/use-deboune';
import { useDebounce } from 'use-debounce';
export function useBlockItems() {
  const [q, setQ] = useState('');
  const [debouncedQ] = useDebounce(q, 300);
  const blockListQuery = useBlockListQuery({ q: debouncedQ });

  const items = blockListQuery.data?.items ?? [];

  return { items, isLoading: blockListQuery.isFetching, q, setQ };
}
