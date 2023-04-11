import IntersectionObserver from '_hoc/IntersectionObserver/IntersectionObserver'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import ServicesCard from '_molecules/ServicesCard/ServicesCard'
import { useScrollDirection } from '_hooks/useScrollDirection'
import { KeylineType } from '_types/local/base'
import { Animations } from '_utils/animations'
import Heading from '_atoms/Heading/Heading'
import styles from './Services.module.scss'
import { ServicesType } from '_types/cms'
import { motion } from 'framer-motion'

const Services = ({ headline, cards, anchorName }: ServicesType) => {
  const { fade, fadeFromBottom, fadeLeftToRight } = new Animations()
  const scrollDirection = useScrollDirection()

  const callbackIn = (inter: IntersectionObserverEntry | null) => {
    const gradientBg = document.querySelector('#gradientBg') as HTMLImageElement
    gradientBg.style.opacity = '0'
  }

  const callbackOut = (inter: IntersectionObserverEntry | null) => {
    const gradientBg = document.querySelector('#gradientBg') as HTMLImageElement
    if (scrollDirection === 'up') {
      gradientBg.style.opacity = '1'
    }
  }

  return (
    <>
      <ComponentLayout
        animation={fade({ when: 'beforeChildren' })}
        viewPort={{ amount: 0.6, once: false }}
        onViewportLeaveCallback={callbackOut}
        onViewportEnterCallback={callbackIn}
      >
        <span />
      </ComponentLayout>
      <ComponentLayout
        animation={fade({ when: 'beforeChildren' })}
        viewPort={{ amount: 0.6, once: true }}
        innerClass={`${styles.services}`}
        addKeyline={KeylineType.SIDES}
        id={anchorName?.current}
      >
        <motion.div
          variants={fadeLeftToRight({ delay: 0.3 })}
          className={styles.servicesHeadline}
          viewport={{ once: true }}
          whileInView="visible"
          initial="hidden"
          exit="hidden"
        >
          <Heading level={1}>{headline}</Heading>
        </motion.div>
        <motion.div
          className={styles.servicesCards}
          viewport={{ once: true }}
          whileInView="visible"
          initial="hidden"
          exit="hidden"
          variants={fadeFromBottom({
            delay: 0.5,
            delayChildren: 1,
            staggerChildren: 0.02,
          })}
        >
          {cards?.map((card, i) => (
            <ServicesCard {...card} key={i} />
          ))}
        </motion.div>
      </ComponentLayout>
    </>
  )
}

export default Services
