import styles from './ComponentLayout.module.scss'
import { ReactNode } from 'react'

export interface ComponentLayoutProps {
  containerClass?: string
  addKeyline?: boolean,
  innerClass?: string
  children: ReactNode
}

const ComponentLayout = ({
  addKeyline = false,
  containerClass,
  innerClass,
  children,
  ...props
}: ComponentLayoutProps) => {
  return (
    <section
      className={`componentLayout ${containerClass ? containerClass : ''}`}
      {...props}
    >
      <div
        className={`componentInner ${innerClass ? innerClass : ''}`}
      >
        {addKeyline && <span className={styles.keyline}></span>}
        {children}
      </div>
    </section>
  )
}

export default ComponentLayout
