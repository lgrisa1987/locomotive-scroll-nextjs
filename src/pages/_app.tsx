import { SiteLayout } from '@/Layout';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <SiteLayout>
      <AnimatePresence mode='wait' initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </SiteLayout>
  );
}
