import { NextIntlClientProvider as IntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const NextIntlClientProvider = async ({ children }: Props) => {
  const messages = await getMessages();
  return <IntlClientProvider messages={messages}>{children}</IntlClientProvider>;
};

export default NextIntlClientProvider;
