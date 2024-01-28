import type { Metadata } from 'next';

import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NextTopLoader from 'nextjs-toploader';
import { Suspense } from 'react';

import Layouts from '@/common/components/layouts/index';
import { METADATA } from '@/common/constant/metadata';

import ThemeProviderContext from '@/context/theme';

import { soraSans } from '../common/styles/fonts';
import './globals.css';

export const metadata: Metadata = {
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={soraSans.className}>
        <NextTopLoader
          color="#40C463"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease-in-out"
          speed={200}
          shadow="0 0 10px #9BE9A8,0 0 5px #9BE9A8"
        />
        <ThemeProviderContext>
          <Suspense>
            <Layouts>{children}</Layouts>
          </Suspense>
        </ThemeProviderContext>
        {process.env.NODE_ENV === 'production' && <Analytics />}

        <GoogleAnalytics measurementId={process.env.GTM_ID || ''} />
        <SpeedInsights />
      </body>
    </html>
  );
}
