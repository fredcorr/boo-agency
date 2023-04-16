import GradientBackground from '_atoms/GradientBackground/GradientBackground'
import SwiperCarousel from '_molecules/SwiperCarousel/SwiperCarousel'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { KeylineType } from '_types/local/base'
import { Animations } from '_utils/animations'
import style from './WhyBoo.module.scss'
import { WhyBooType } from '_types/cms'
import { motion } from 'framer-motion'
import Stat from '_atoms/Stat/Stat'

export interface SliderState {
  isMobile: boolean
  activeSlide: number
}

const Slider = ({
  clientLogos,
  slideStats,
  anchorName,
  title,
  label,
  body,
}: WhyBooType) => {
  const { fadeFromBottom, fadeLeftToRight } = new Animations()

  return (
      <ComponentLayout
        addKeyline={KeylineType.All_SIDES}
        data-has-logos={!!clientLogos}
        data-has-stats={!!slideStats}
        innerClass={style.whyBoo}
        id={anchorName?.current}
      >
        {label && (
          <motion.p
            variants={fadeFromBottom({ delay: 0.4 })}
            viewport={{ once: true }}
            className={style.label}
            whileInView="visible"
            initial="hidden"
            exit="hidden"
          >
            {label}
          </motion.p>
        )}
        {title && (
          <motion.div
            variants={fadeFromBottom({ delay: 0.5 })}
            viewport={{ once: true }}
            className={style.title}
            whileInView="visible"
            initial="hidden"
            exit="hidden"
          >
            <TextBlock value={title} />
          </motion.div>
        )}
        {body && (
          <motion.div
            variants={fadeLeftToRight({ delay: 0.5 })}
            viewport={{ once: true }}
            className={style.body}
            whileInView="visible"
            initial="hidden"
            exit="hidden"
          >
            <TextBlock value={body} />
          </motion.div>
        )}
        {clientLogos && (
          <>
            <div className={style.gradient}>
              <GradientBackground />
            </div>
            <div className={style.clientLogos}>
              <SwiperCarousel logos={clientLogos} />
            </div>
          </>
        )}
        {slideStats && (
          <>
            <motion.div
              variants={fadeLeftToRight({ delay: 0.5 })}
              viewport={{ once: true, amount: 0.8 }}
              className={style.background}
              whileInView="visible"
              initial="hidden"
              exit="hidden"
            />
            {slideStats.map((st, i) => (
              <Stat {...st} number={i} key={i} />
            ))}
          </>
        )}
      </ComponentLayout>
  )
}

export default Slider
