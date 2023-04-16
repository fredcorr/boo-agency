import HoverAnimation from '../../../public/hoverAnimation.json'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { useSettings } from 'contexts/settings'
import { useState, useEffect, useRef } from 'react'
import styles from './Header.module.scss'
import { CMSPageTheme } from '_types/cms'
import { useRouter } from 'next/router'
import Menu from '_atoms/Menu/Menu'
import Link from 'next/link'

export interface HeaderProps {
  theme: CMSPageTheme
}

export interface NavThemeState {
  isOpen: boolean
  theme: CMSPageTheme
}

const Header = ({ theme }: HeaderProps) => {
  const [navState, setNavState] = useState<boolean>(false)
  const ref = useRef<LottieRefCurrentProps>(null)
  const settings = useSettings()
  const router = useRouter()

  const handleMenuOpen = (state: boolean) => {
    setNavState(state)
  }

  useEffect(() => {
    setNavState(false)
  }, [router])

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} data-nav-open={navState}>
        <Lottie
          onMouseOver={() => {ref.current?.play()}}
          animationData={HoverAnimation}
          autoPlay={false}
          lottieRef={ref}
          loop={false}
        />
      </Link>
      <nav className={styles.nav} data-is-open={navState} data-theme={theme}>
        {settings && (
          <Link
            href={`mailto:${settings.email || ''}`}
            className={styles.contactLink}
          >
            SAY HELLO
          </Link>
        )}
        <button
          onClick={() => handleMenuOpen(!navState)}
          className={styles.menuBtn}
        />
        <Menu isOpen={navState} />
      </nav>
    </header>
  )
}

export default Header
