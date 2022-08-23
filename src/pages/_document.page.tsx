import React from 'react';

import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-title" content="2차갈래" />
          <meta name="application-name" content="2차갈래" />
          <meta name="description" content="2차를 빠르게 찾게 도와주는 플랫폼 2차갈래" />
          <meta
            name="theme-color"
            content="#EB4F27"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#EB4F27"
            media="(prefers-color-scheme: dark)"
          />
          <link rel="apple-touch-icon" href="/images/maskable_icon_512.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />

          <link
            rel="stylesheet"
            as="style"
            crossOrigin="anonymous"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css"
          />
          <script
            async
            type="text/javascript"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
