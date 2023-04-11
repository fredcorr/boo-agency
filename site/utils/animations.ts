export const transition = {
  ease: 'easeInOut',
  duration: 0.3,
  type: 'tween',
}

export type Animation = (trans?: any) => any

export class Animations {

  fade: Animation = (trans) => ({
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        type: 'Tween',
        ...trans,
      },
    },
    hidden: { opacity: 0 },
  })

  fadeFromBottom: Animation = (trans) => ({
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        type: 'Tween',
        ...trans,
      },
    },
    hidden: { opacity: 0, y: '10%' },
  })

  fadeFromTop: Animation = (trans) => ({
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        type: 'Tween',
        ...trans,
      },
    },
    hidden: { opacity: 0, y: '-10%' },
  })

  fadeRightToLeft: Animation = (trans) => ({
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ...transition,
        ...trans,
      },
    },
    hidden: { opacity: 0, x: '10%' },
  })

  fadeLeftToRight: Animation = (trans) => ({
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ...transition,
        ...trans,
      },
    },
    hidden: { opacity: 0, x: '-10%' },
  })

  scaleLeftToRight: Animation = (trans) => ({
    visible: {
      scaleX: 1,
      transition: {
        ...transition,
        ...trans,
      },
    },
    hidden: { scaleX: 0, transformOrigin: 'left center' },
  })
}
