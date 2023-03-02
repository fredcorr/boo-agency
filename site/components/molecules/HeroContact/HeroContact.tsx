import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import TextBlock from '_atoms/TextBlock/TextBlock'
import styles from './HeroContact.module.scss'
import Heading from '_atoms/Heading/Heading'
import { HeroContactType } from '_types/cms'
import Link from 'next/link'

const HeroContact = ({
  linkedin,
  bodyText,
  headline,
  email,
}: HeroContactType) => {
  return (
    <>
      <ComponentLayout
        containerClass={styles.heroContactContainer}
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
          {!!email && (
            <Link href={`mailto:${email}`} className={styles.email}>
              {email}
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
