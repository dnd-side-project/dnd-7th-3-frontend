import { ReactElement, ReactNode, useState } from 'react';

import { ThemeProvider } from '@emotion/react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import MobileWebLayout from '@/components/common/MobileWebLayout';
import GlobalStyles from '@/styles/GlobalStyles';
import lightTheme from '@/styles/theme';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({ Component: AppComponent, pageProps }: AppPropsWithLayout) {
  const getLayout = AppComponent.getLayout ?? ((page) => page);

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        suspense: true,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <MobileWebLayout>
              {getLayout((
                <AppComponent {...pageProps} />
              ))}
            </MobileWebLayout>
          </ThemeProvider>
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
