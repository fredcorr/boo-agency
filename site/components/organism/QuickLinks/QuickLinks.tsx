import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import styles from './QuickLinks.module.scss'
import Heading from '_atoms/Heading/Heading'
import { QuickLinksType } from '_types/cms'
import Link from 'next/link'

const QuickLinks = ({ headline, links }: QuickLinksType) => {
  return (
    <ComponentLayout innerClass={styles.quickLinks} addKeyline>
      {headline && (
        <Heading level={2} className={styles.quickLinksHeadline}>
          {headline}
        </Heading>
      )}
      {links && (
        <div className={styles.quickLinksUrl}>
          {links.map(({ title, slug }, i) => {
            return (
              <Link href={slug.current} key={i} className={styles.links}>
                {title}
              </Link>
            )
          })}
        </div>
      )}
    </ComponentLayout>
  )
}

export default QuickLinks
