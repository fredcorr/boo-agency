import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import ServicesCard from '_molecules/ServicesCard/ServicesCard'
import { useSettings } from 'contexts/settings'
import { KeylineType } from '_types/local/base'
import Heading from '_atoms/Heading/Heading'
import styles from './Services.module.scss'
import { ServicesType } from '_types/cms'

const Services = ({ headline, cards, anchorName }: ServicesType) => {
  return (
    <ComponentLayout
      addKeyline={KeylineType.SIDES}
      innerClass={styles.services}
      id={anchorName?.current}
    >
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
