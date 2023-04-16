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
  const { fadeFromTop, fadeFromBottom } = new Animations()

  return (
    <ComponentLayout
      innerClass={styles.HomePageHero}
      addKeyline={KeylineType.OPEN}
      id={anchorName?.current}
    >
      <motion.div
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeFromTop({delay: 0.2})}
        className={styles.text}
        whileInView="visible"
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
          viewport={{ once: true, amount: 0.6 }}
          className={styles.video}
          whileInView="visible"
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
