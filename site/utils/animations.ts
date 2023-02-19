export const transition = {
  ease: 'easeInOut',
  duration: 0.3,
  type: 'tween',
}

export const menuAnim = {
  in: {
    y: '0%',
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: .1,
      ...transition,
    },
  },
  out: {
    y: '-10%',
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      delayChildren: .1,
      ...transition,
    },
  },
}
