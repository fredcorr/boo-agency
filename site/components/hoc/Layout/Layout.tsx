import GradientBackground from '_atoms/GradientBackground/GradientBackground'
import { CMSPageTheme, CMSPage } from '_types/cms'
import Header from '_molecules/Header/Header'
import styles from './Layout.module.scss'
import Footer from '_atoms/Footer/Footer'
import React, { ReactNode } from 'react'
import Seo from '_atoms/Seo/Seo'

export interface LayoutProps extends CMSPage {
  theme: CMSPageTheme
  children: ReactNode
}

const Layout = ({ children, footer, seo, ...props }: LayoutProps) => {
  return (
    <div className={styles.layout} data-theme={props.theme}>
      <Seo {...seo} />
      <Header theme={props.theme} />
      <main className={styles.main}>{children}</main>
      {footer && footer.includeFooter && <Footer {...footer} />}
      {props.theme === CMSPageTheme.GRADIENT && <GradientBackground />}
    </div>
  )
}

export default Layout
