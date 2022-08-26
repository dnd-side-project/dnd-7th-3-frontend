const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['page.tsx', 'api.ts'],
  swcMinify: true,
  compiler: {
    reactRemoveProperties: isProd && {
      properties: ['^data-test'],
    },
    removeConsole: isProd && {
      exclude: ['error'],
    },
    emotion: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

// FIXME - 핫모듈에서 에러 발생 및 캐싱이 정상적으로 동작하지 않는 이슈 추후에 다시 적용
// module.exports = withPlugins(
//   [
//     [
//       withPWA,
//       {
//         pwa: {
//           disable: !isProd,
//           dest: 'public',
//           runtimeCaching,
//         },
//       },
//     ],
//   ],
//   nextConfig,
// );
module.exports = nextConfig;
