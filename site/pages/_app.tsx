import LandingAnimation from '_atoms/LandingAnimation/LandingAnimation'
import type { AppProps } from 'next/app'
import { CMSPage } from '_types/cms'
import Script from 'next/script'
import { useState } from 'react'
import '../styles/main.scss'

export interface App extends AppProps {
  pageProps: CMSPage
}

export default function App({ Component, pageProps }: App) {
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
  
  return (
    <>
      <Script id="animate.min">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Script>
      {!!firstLoad ? (
        <LandingAnimation onAnimationEnd={() => setFirstLoad(false)} />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
