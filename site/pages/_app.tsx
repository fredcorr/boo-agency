import { NavPagesProvider } from 'contexts/nav-pages'
import type { AppProps } from 'next/app'
import '../styles/main.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavPagesProvider items={pageProps.navPages}>
      <Component {...pageProps} />
    </NavPagesProvider>
  )
}
