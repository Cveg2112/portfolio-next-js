import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '../components/includes/header';
import { Footer } from '../components/includes/footer';
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router';
import { SlowRedParticles } from '../components/includes/particles';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageResults = pageProps?.page?.results[0];
  return (
    <>
      <Head>
        <title>Conor's Portfolio | {pageResults?.data?.pagetitle[0]?.text}</title>
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header
        navItems={pageProps?.nav?.results[0]?.data?.nav_items}
      />
      <SlowRedParticles />
      <AnimatePresence
        exitBeforeEnter
        // initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
export default MyApp