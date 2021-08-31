import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import NextNProgress from 'nextjs-progressbar'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta name="theme-color" content="#030518" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />

      <NextNProgress color="#2596be" stopDelayMs={200} height={4} />
      <Component {...pageProps} />
    </>
  )
}

export default App
