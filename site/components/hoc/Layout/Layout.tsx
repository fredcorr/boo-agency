import React, { useEffect, useState } from 'react'
import styles from './Layout.module.scss'

const Layout = (props: any) => {

  return (
    <>
      <main className={styles.main}>{props.children}</main>
    </>
  )
}

export default Layout
