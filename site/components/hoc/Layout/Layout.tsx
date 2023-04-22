import GradientBackground from '_atoms/GradientBackground/GradientBackground'
import { SettingsProvider } from 'contexts/settings'
import { CMSPageTheme, CMSPage } from '_types/cms'
import Header from '_molecules/Header/Header'
import styles from './Layout.module.scss'
import Footer from '_atoms/Footer/Footer'
import React, { ReactNode } from 'react'
import Seo from '_atoms/Seo/Seo'
import Link from 'next/link'

export interface LayoutProps extends CMSPage {
  theme: CMSPageTheme
  children: ReactNode
}

const Layout = ({ children, footer, seo, preview, ...props }: LayoutProps) => {
  return (
    <SettingsProvider items={props.settings}>
      <div className={styles.layout} data-theme={props.theme} id="#body">
        {!!preview && (
          <Link className={styles.exitPreviewButton} href="/api/exit-preview">
            Exit Preview
          </Link>
        )}
        <Seo {...seo} />
        <Header theme={props.theme} />
        <main className={styles.main}>{children}</main>
        {footer && footer.includeFooter && <Footer {...footer} />}
        {props.theme === CMSPageTheme.GRADIENT && (
          <div className={styles.gradientBackground} id="gradientBg">
            <GradientBackground />
          </div>
        )}
      </div>
    </SettingsProvider>
  )
}

export default Layout
