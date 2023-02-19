import { ReactNode } from 'react'

export interface ComponentLayoutProps {
  containerClass?: string
  innerClass?: string
  children: ReactNode
}

const ComponentLayout = ({
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
        {children}
      </div>
    </section>
  )
}

export default ComponentLayout
