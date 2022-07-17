/* eslint-disable @typescript-eslint/no-empty-function */
import { PropsWithChildren, ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

function ReactQueryWrapper({ children }: PropsWithChildren): ReactElement {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default ReactQueryWrapper;
