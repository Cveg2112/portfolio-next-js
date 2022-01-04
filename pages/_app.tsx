import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '../components/includes/header';
import { Footer } from '../components/includes/footer';
import { Logo } from '../assets/icons/logo';

function MyApp({ Component, pageProps }: AppProps) {
  const pageResults = pageProps.page.results[0];
  return (
    <>
      <Head>
        <title>Conor's Portfolio | {pageResults.data.pagetitle[0].text}</title>
      </Head>
       <Header
        navItems={pageProps.nav.results[0].data.nav_items}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp
