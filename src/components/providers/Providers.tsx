import { PropsWithChildren } from 'react';
import { Toaster } from '../ui/sonner';
import ReactQueryClientProvider from './react-query-client-provider';
import { ThemeProvider } from './theme-provider';

const Providers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ReactQueryClientProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
        <Toaster closeButton />
      </ThemeProvider>
    </ReactQueryClientProvider>
  );
};

export default Providers;
