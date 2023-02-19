import Header from '_molecules/Header/Header'
import styles from './Layout.module.scss'
import { CMSPageTheme } from '_types/cms'
import React, { ReactNode } from 'react'

export interface LayoutProps {
 theme: CMSPageTheme
 children: ReactNode
}

const Layout = ({ theme, children }: LayoutProps) => {
  return (
    <div className={styles.layout} data-theme={theme}>
      <Header theme={theme} />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
