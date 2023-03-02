import { SettingsProvider } from 'contexts/settings'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { CMSPage } from '_types/cms'
import '../styles/main.scss'

export interface App extends AppProps {
  pageProps: CMSPage
}

export default function App({ Component, pageProps }: App) {
  return (
    <SettingsProvider items={pageProps.settings}>
      <Component {...pageProps} />
    </SettingsProvider>
  )
}
