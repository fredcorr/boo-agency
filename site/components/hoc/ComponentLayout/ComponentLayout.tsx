import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
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
  animation,
  children,
  id,
  ...props
}: ComponentLayoutProps) => {
  return (
    <section
      className={`componentLayout ${containerClass ? containerClass : ''}`}
      id={id}
    >
      <ConditionalWrapper
        condition={!!animation}
        elseWrapper={(chld) => {
          return (
            <div
              className={`componentInner ${innerClass ? innerClass : ''}`}
              {...props}
            >
              {chld}
            </div>
          )
        }}
        wrapper={(chld) => {
          return (
            <IntersectionObserver
              className={`componentInner ${innerClass ? innerClass : ''}`}
              animation={animation}
              {...props}
            >
              {chld}
            </IntersectionObserver>
          )
        }}
      >
        <>
          {addKeyline && (
            <span className={styles.keyline} data-type={addKeyline}></span>
          )}
          {children}
        </>
      </ConditionalWrapper>
    </section>
  )
}

export default ComponentLayout
