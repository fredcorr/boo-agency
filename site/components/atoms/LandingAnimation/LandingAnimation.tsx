import LandingAnimationFile from '../../../public/landingAnimation.json'
import { motion, useAnimation } from 'framer-motion'
import styles from './LandingAnimation.module.scss'
import { Animations } from '_utils/animations'
import Lottie from 'lottie-react'

export interface LandingAnimationProps {
  onAnimationEnd: () => void
}

const LandingAnimation = ({ onAnimationEnd }: LandingAnimationProps) => {
  const { fade } = new Animations()
  const controls = useAnimation()
  const onLottieComplete = () => {
    controls.start({
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
        type: 'Tween',
      },
    })
  }

  return (
    <motion.div
      onAnimationComplete={onAnimationEnd}
      variants={fade({ duration: 0.25 })}
      animate={controls}
    >
      <Lottie
        animationData={LandingAnimationFile}
        className={styles.LandingAnimation}
        onComplete={onLottieComplete}
        loop={false}
      />
    </motion.div>
  )
}

export default LandingAnimation
