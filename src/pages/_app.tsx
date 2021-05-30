import React, { FC, useRef } from 'react'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'

import createCache from '@emotion/cache'
import { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { CacheProvider } from '@emotion/react'
import theme from '../theme/theme'

export const cache = createCache({ key: 'css', prepend: true })

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const queryClientRef = useRef<any>(null)

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <CacheProvider value={cache}>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClientRef.current}>
            <Hydrate state={pageProps.dehydratedState}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </Hydrate>

            <ReactQueryDevtools />
          </QueryClientProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default App
