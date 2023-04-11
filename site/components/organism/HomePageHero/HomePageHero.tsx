import IntersectionObserver from '_hoc/IntersectionObserver/IntersectionObserver'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { KeylineType } from '_types/local/base'
import styles from './HomePageHero.module.scss'
import { Animations } from '_utils/animations'
import { HomePageHeroType } from '_types/cms'
import Heading from '_atoms/Heading/Heading'
import { motion } from 'framer-motion'

const HomePagehero = ({
  subHeadline,
  anchorName,
  headline,
  video,
}: HomePageHeroType) => {
  const { fadeFromTop, fadeFromBottom, fade } = new Animations()
  const { scrollanim, headingAnim, videoAnim } = {
    scrollanim: {
      anim: {
        visible: {
          opacity: 1,
          transition: { type: 'Tween', duration: 0.2, ease: 'easeInOut' },
        },
        hidden: { opacity: 0 },
      },
    },
    headingAnim: {
      anim: (delay: number) => ({
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            ease: 'easeInOut',
            type: 'Tween',
            duration: 0.4,
            delay: delay,
          },
        },
        hidden: { opacity: 0, x: '-10%' },
      }),
    },
    videoAnim: {
      anim: {
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            ease: 'easeInOut',
            type: 'Tween',
            duration: 0.4,
            delay: 0.4,
          },
        },
        hidden: { opacity: 0, y: '10%' },
      },
    },
  }

  return (
    <ComponentLayout
      animation={fade({ when: 'beforeChildren' })}
      viewPort={{ once: true, amount: 0.6 }}
      innerClass={styles.HomePageHero}
      addKeyline={KeylineType.OPEN}
      id={anchorName?.current}
    >
      <motion.div
        variants={fadeFromTop({delay: 0.2})}
        className={styles.text}
        animate="visible"
        initial="hidden"
        exit="hidden"
      >
        <Heading level={1} className={styles.headline}>
          {headline}
        </Heading>
        <p className={styles.subHeadline}>{subHeadline}</p>
      </motion.div>
      {video && (
        <motion.div
          variants={fadeFromBottom({delay: 0.2})}
          className={styles.video}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <video loop autoPlay muted>
            <source src={video.url} type={video.mimeType} />
          </video>
        </motion.div>
      )}
    </ComponentLayout>
  )
}

export default HomePagehero
