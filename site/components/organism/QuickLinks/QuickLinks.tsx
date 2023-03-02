import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import TextBlock from '_atoms/TextBlock/TextBlock'
import styles from './QuickLinks.module.scss'
import { QuickLinksType } from '_types/cms'
import Link from 'next/link'
import { KeylineType } from '_types/local/base'

const QuickLinks = ({ content, links, anchorName }: QuickLinksType) => {
  return (
    <ComponentLayout
      innerClass={styles.quickLinks}
      addKeyline={KeylineType.OPEN}
      id={anchorName?.current}
    >
      {content && (
        <div className={styles.quickLinksHeadline}>
          <TextBlock value={content} />
        </div>
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
