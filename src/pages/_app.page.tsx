import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import GlobalStyles from '@/styles/GlobalStyles';
import lightTheme from '@/styles/theme';

function MyApp({ Component: AppComponent, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AppComponent {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
