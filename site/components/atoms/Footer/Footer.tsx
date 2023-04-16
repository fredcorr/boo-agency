import { useSettings } from 'contexts/settings'
import styles from './Footer.module.scss'
import { FooterTheme, FooterType } from '_types/cms'
import Link from 'next/link'

const Footer = ({ footerTheme, footerCopy, includeNavigation }: FooterType) => {
  const { navigation } = useSettings()
  return (
    <footer className={styles.footer} data-theme={footerTheme}>
      {includeNavigation && (
        <>
          {footerTheme !== FooterTheme.DARK && (
            <span className={styles.keyLine} />
          )}
          <nav className={styles.footerNavigation}>
            {navigation?.map(({ link, linkLabel, anchorLink }, i) => (
              <Link
                href={`${link.slug.current}${
                  anchorLink ? `#${anchorLink}` : ''
                }`}
                className={styles.navItem}
                key={i}
              >
                {linkLabel || link.title}
              </Link>
            ))}
          </nav>
        </>
      )}
      {!!footerCopy && <p className={styles.footerCopy}>{footerCopy}</p>}
    </footer>
  )
}

export default Footer
