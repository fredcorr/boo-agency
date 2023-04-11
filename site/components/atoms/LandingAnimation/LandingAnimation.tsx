import LandingAnimationFile from '../../../public/landingAnimation.json'
import styles from './LandingAnimation.module.scss'
import { Animations } from '_utils/animations'
import { motion, useAnimation } from 'framer-motion'
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
        duration: 4,
        ease: 'easeInOut',
        type: 'Tween',
      },
    })
  }

  return (
    <motion.div
      onAnimationComplete={onAnimationEnd}
      variants={fade({ duration: 3 })}
      animate={controls}
    >
      <Lottie
        animationData={LandingAnimationFile}
        className={styles.LandingAnimation}
        onComplete={onLottieComplete}
        loop={false}
      ></Lottie>
    </motion.div>
  )
}

export default LandingAnimation
