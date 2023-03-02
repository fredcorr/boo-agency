import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import ServicesCard from '_molecules/ServicesCard/ServicesCard'
import { useSettings } from 'contexts/settings'
import Heading from '_atoms/Heading/Heading'
import styles from './Services.module.scss'
import { ServicesType } from '_types/cms'
import Link from 'next/link'
import { KeylineType } from '_types/local/base'

const Services = ({ headline, cards, anchorName }: ServicesType) => {
  const { navigation } = useSettings()
  return (
    <ComponentLayout innerClass={styles.services} id={anchorName?.current} addKeyline={KeylineType.SIDES}>
      <Heading level={1} className={styles.servicesHeadline}>
        {headline}
      </Heading>
      <div className={styles.servicesCards}>
        {cards?.map((card, i) => (
          <ServicesCard {...card} key={i} />
        ))}
      </div>
    </ComponentLayout>
  )
}

export default Services
