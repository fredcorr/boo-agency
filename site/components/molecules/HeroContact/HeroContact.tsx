import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { useSettings } from 'contexts/settings'
import { Animations } from '_utils/animations'
import styles from './HeroContact.module.scss'
import Heading from '_atoms/Heading/Heading'
import { HeroContactType } from '_types/cms'
import Link from 'next/link'

const HeroContact = ({ linkedin, bodyText, headline }: HeroContactType) => {
  const { fadeLeftToRight } = new Animations()
  const settings = useSettings()
  return (
    <>
      <ComponentLayout
        animation={fadeLeftToRight({ when: 'beforeChildren' })}
        containerClass={styles.heroContactContainer}
        viewPort={{ amount: 0.6, once: true }}
        innerClass={styles.heroContact}
      >
        {!!headline && (
          <Heading level={1} className={styles.heroContactHeader}>
            {headline}
          </Heading>
        )}
      </ComponentLayout>
      <footer className={styles.footer}>
        <div className={styles.footerContact}>
          {!!settings.email && (
            <Link href={`mailto:${settings.email}`} className={styles.email}>
              {settings.email}
            </Link>
          )}
        </div>
        <div className={styles.footerText}>
          {!!bodyText && <TextBlock value={bodyText} />}
        </div>
        {!!linkedin && (
          <Link className={styles.linkedin} href={linkedin}>
            LinkedIn
          </Link>
        )}
      </footer>
    </>
  )
}

export default HeroContact
