import styles from './GradientBackground.module.scss'
import Image from 'next/image'

const GradientBackground = () => {
  return (
    <div className={styles.gradientBackground}>
      <Image src="/images/gradient-displacement.png" fill alt='gradient'/>
    </div>
  )
}

export default GradientBackground