import GradientBackground from '_atoms/GradientBackground/GradientBackground'
import Header from '_molecules/Header/Header'
import { CMSPageTheme, CMSPage } from '_types/cms'
import styles from './Layout.module.scss'
import React, { ReactNode } from 'react'
import Seo from '_atoms/Seo/Seo'

export interface LayoutProps extends CMSPage {
 theme: CMSPageTheme
 children: ReactNode
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div className={styles.layout} data-theme={props.theme}>
      <Seo {...props} />
      <Header theme={props.theme} />
      <main className={styles.main}>{children}</main>
      {props.theme === CMSPageTheme.GRADIENT && <GradientBackground /> }
    </div>
  )
}

export default Layout
