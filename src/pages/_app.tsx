import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7159C1" />
        <meta
          name="description"
          content="A simple project starter to work with NextJS, Typescript, React and Styled-Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
