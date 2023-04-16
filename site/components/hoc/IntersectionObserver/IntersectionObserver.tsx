import React, { ReactElement, ReactNode, RefObject } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface ViewportOptions {
  root?: RefObject<Element>
  once?: boolean
  margin?: string
  amount?: 'some' | 'all' | number
  fallback?: boolean
}

export interface IntersectionObserverProps extends React.HTMLAttributes<HTMLDivElement> {
  onViewportEnterCallback?: (inter: IntersectionObserverEntry | null) => void
  onViewportLeaveCallback?: (inter: IntersectionObserverEntry | null) => void
  viewPort?: ViewportOptions
  children?: ReactNode
  animation?: {
    hidden: any
    visible: any
  }
}

const IntersectionObserver = ({
  onViewportLeaveCallback,
  onViewportEnterCallback,
  viewPort = {},
  className,
  animation,
  children,
}: IntersectionObserverProps) => {
  return (
    <motion.div
      onViewportEnter={(inter) => {
        onViewportEnterCallback?.(inter)
      }}
      onViewportLeave={(inter) => {
        onViewportLeaveCallback?.(inter)
      }}
      className={className}
      whileInView="visible"
      variants={animation}
      viewport={viewPort}
      initial="hidden"
    >
      {children}
    </motion.div>
  )
}

export default IntersectionObserver
