import styles from './ComponentLayout.module.scss'
import { KeylineType } from '_types/local/base'
import { ReactNode } from 'react'

export interface ComponentLayoutProps {
  containerClass?: string
  addKeyline?: KeylineType,
  innerClass?: string
  children: ReactNode
  id?: string
}

const ComponentLayout = ({
  containerClass,
  addKeyline,
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
        {addKeyline && <span className={styles.keyline} data-type={addKeyline}></span>}
        {children}
      </div>
    </section>
  )
}

export default ComponentLayout
