import styles from './Button.module.scss'
import Link from 'next/link'
import React from 'react'

export interface ButtonProps extends HTMLAnchorElement {
  link: string
}

const Button = ({ link, children, ...props }: any) => (
  <Link className={styles.button} href={link} {...props}>
    {children}
  </Link>
)

export default Button
