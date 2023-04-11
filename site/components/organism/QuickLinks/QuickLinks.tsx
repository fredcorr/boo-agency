import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { KeylineType } from '_types/local/base'
import { Animations } from '_utils/animations'
import styles from './QuickLinks.module.scss'
import { QuickLinksType } from '_types/cms'
import { motion } from 'framer-motion'
import Link from 'next/link'

const QuickLinks = ({ content, links, anchorName }: QuickLinksType) => {
  const { fadeFromBottom, fadeLeftToRight } = new Animations()
  
  return (
    <ComponentLayout
      animation={fadeFromBottom({ when: 'beforeChildren' })}
      viewPort={{ amount: 0.6, once: true }}
      innerClass={styles.quickLinks}
      addKeyline={KeylineType.OPEN}
      id={anchorName?.current}
    >
      {content && (
        <motion.div
          className={styles.quickLinksHeadline}
          variants={fadeLeftToRight()}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <TextBlock value={content} />
        </motion.div>
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
