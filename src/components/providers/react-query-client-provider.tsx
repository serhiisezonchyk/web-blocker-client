'use client';

import { queryClient as importedQC } from '@/shared/api/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

const ReactQueryClientProvider = ({ children }: Props) => {
  const [queryClient] = useState(importedQC);
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryClientProvider;
