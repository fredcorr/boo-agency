import styles from './ComponentLayout.module.scss'
import { KeylineType } from '_types/local/base'
import { ReactNode, forwardRef } from 'react'

export interface ComponentLayoutProps {
  containerClass?: string
  addKeyline?: KeylineType,
  innerClass?: string
  children: ReactNode
  id?: string
}

export type Ref = HTMLDivElement

const ComponentLayout = forwardRef<HTMLDivElement, ComponentLayoutProps>(({
  containerClass,
  addKeyline,
  innerClass,
  children,
  ...props
}, ref) => {
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
})

ComponentLayout.displayName = 'ComponentLayout'

export default ComponentLayout
