import styles from './Header.module.scss'
import { CMSPageTheme } from '_types/cms'
import Menu from '_atoms/Menu/Menu'
import { useState } from 'react'
import Image from 'next/image'
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
  const logoColor = (state: boolean) =>
    !!state || theme === CMSPageTheme.ORANGE ? 'black' : 'white'
  const handleMenuOpen = (state: boolean) => {
    setNavState(state)
  }
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src={`/logo-${logoColor(navState)}.svg`}
          alt="logo"
          fill
        />
      </Link>
      <nav className={styles.nav} data-is-open={navState} data-theme={theme}>
        <Link href="/" className={styles.contactLink}>
          SAY HELLO
        </Link>
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
