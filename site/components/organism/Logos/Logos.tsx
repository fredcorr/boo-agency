import SwiperCarousel from '_molecules/SwiperCarousel/SwiperCarousel'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { KeylineType } from '_types/local/base'
import { Animations } from '_utils/animations'
import style from './Logos.module.scss'
import { LogosType } from '_types/cms'
import { motion } from 'framer-motion'
import 'swiper/css'

const Logos = ({ clientLogos, logosCopy, anchorName }: LogosType) => {
  const { fadeFromBottom, fadeLeftToRight } = new Animations()

  return (
    <ComponentLayout
      addKeyline={KeylineType.SIDES}
      containerClass={style.logos}
      innerClass={style.logoInner}
      id={anchorName?.current}
    >
      {logosCopy && (
        <motion.div
          variants={fadeLeftToRight()}
          className={style.logosCopy}
          viewport={{ once: true }}
          whileInView="visible"
          initial="hidden"
          exit="hidden"
        >
          <TextBlock value={logosCopy} />
        </motion.div>
      )}
      {clientLogos && (
        <motion.div
          viewport={{ once: true, amount: 0.8 }}
          className={style.clientLogos}
          variants={fadeFromBottom()}
          whileInView="visible"
          initial="hidden"
          exit="hidden"
        >
          <SwiperCarousel logos={clientLogos} />
        </motion.div>
      )}
    </ComponentLayout>
  )
}

export default Logos
