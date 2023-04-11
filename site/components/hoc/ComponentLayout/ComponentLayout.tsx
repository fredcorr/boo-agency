import styles from './ComponentLayout.module.scss'
import { KeylineType } from '_types/local/base'
import { ReactNode } from 'react'

import IntersectionObserver, {
  IntersectionObserverProps,
} from '_hoc/IntersectionObserver/IntersectionObserver'

export interface ComponentLayoutProps extends IntersectionObserverProps {
  containerClass?: string
  addKeyline?: KeylineType
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
    >
      <IntersectionObserver
        className={`componentInner ${innerClass ? innerClass : ''}`}
        {...props}
      >
        {addKeyline && (
          <span className={styles.keyline} data-type={addKeyline}></span>
        )}
        {children}
      </IntersectionObserver>
    </section>
  )
}

export default ComponentLayout
