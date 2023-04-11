import { useState, useRef, useEffect } from 'react'
import TextBlock from '_atoms/TextBlock/TextBlock'
import styles from './ServicesCard.module.scss'
import { Animations } from '_utils/animations'
import { ServicesCardType } from '_types/cms'
import Heading from '_atoms/Heading/Heading'
import ArrowDown from '_svgs/ArrowDown'
import debounce from 'lodash/debounce'
import { motion } from 'framer-motion'

const ServicesCard = ({ title, body }: ServicesCardType) => {
  const [currentHeight, setCurrentHeight] = useState<number>(0)
  const { fadeFromBottom } = new Animations()
  const ref = useRef<HTMLDivElement>(null)

  const hanldeTextReveal = () => {
    if (ref.current) {
      console.log('vs')
      setCurrentHeight(!currentHeight ? ref.current?.scrollHeight : 0)
    }
  }

  const calculateOnWindowReisize = debounce(() => {
    if (!!ref?.current && !!currentHeight) {
      setCurrentHeight(ref.current.scrollHeight)
    }
  }, 200)

  useEffect(() => {
    window.addEventListener('resize', calculateOnWindowReisize, {
      passive: true,
    })

    return () => {
      window.removeEventListener('resize', calculateOnWindowReisize)
    }
  }, [])

  return (
    <motion.div
      data-is-open={currentHeight !== 0}
      className={styles.serviceCard}
      variants={fadeFromBottom()}
      animate="visible"
      initial="hidden"
      exit="hidden"
    >
      <Heading level={5} className={styles.serviceCardTitle}>
        {title}
      </Heading>
      <div
        className={styles.serviceCardBody}
        ref={ref}
        style={{
          height: currentHeight,
        }}
      >
        <TextBlock value={body} />
      </div>
      <button className={styles.serviceCardButton} onClick={hanldeTextReveal}>
        <ArrowDown />
      </button>
    </motion.div>
  )
}

export default ServicesCard
