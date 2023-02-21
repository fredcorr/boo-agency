import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import ServicesCard from '_molecules/ServicesCard/ServicesCard'
import { useNavPages } from 'contexts/nav-pages'
import Heading from '_atoms/Heading/Heading'
import styles from './Services.module.scss'
import { ServicesType } from '_types/cms'
import Link from 'next/link'

const Services = ({ headline, cards }: ServicesType) => {
  const pages = useNavPages()
  return (
    <ComponentLayout innerClass={styles.services}>
      <Heading level={1} className={styles.servicesHeadline}>
        {headline}
      </Heading>
      <div className={styles.servicesCards}>
        {cards?.map((card, i) => (
          <ServicesCard {...card} key={i} />
        ))}
      </div>
      <div className={styles.servicesFooter}>
        {pages.map(({ title, slug }, i) => {
          return (
            <Link href={slug.current} key={i} className={styles.servicesLinks}>
              {title}
            </Link>
          )
        })}
      </div>
    </ComponentLayout>
  )
}

export default Services
