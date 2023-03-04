import { useState, useRef, useEffect } from 'react'
import TextBlock from '_atoms/TextBlock/TextBlock'
import styles from './ServicesCard.module.scss'
import { ServicesCardType } from '_types/cms'
import Heading from '_atoms/Heading/Heading'
import ArrowDown from '_svgs/ArrowDown'
import debounce from 'lodash/debounce'

const ServicesCard = ({ title, body }: ServicesCardType) => {
  const ref = useRef<HTMLDivElement>(null)
  const [currentHeight, setCurrentHeight] = useState<number>(0)

  const hanldeTextReveal = () => {
    if (ref.current) {
      setCurrentHeight(!currentHeight ? ref.current?.scrollHeight : 0)
    }
  }

  const calculateOnWindowReisize = debounce(() => {
    if (!!ref?.current && !!currentHeight) {
      setCurrentHeight(ref.current.scrollHeight)
    }
  }, 200)

  useEffect(() => {
    window.addEventListener('resize', calculateOnWindowReisize, { passive: true })

    return () => {
      window.removeEventListener('resize', calculateOnWindowReisize)
    }
  }, [])

  return (
    <div className={styles.serviceCard} data-is-open={currentHeight !== 0}>
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
    </div>
  )
}

export default ServicesCard
