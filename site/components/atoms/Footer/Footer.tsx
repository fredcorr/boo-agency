import styles from './Footer.module.scss'
import { FooterType } from '_types/cms'

const Footer = ({ footerTheme, footerCopy }: FooterType) => {
  return (
    <footer className={styles.footer} data-theme={footerTheme}>
      <p className={styles.footerCopy}>{footerCopy}</p>
    </footer>
  )
}

export default Footer
