import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import TextBlock from '_atoms/TextBlock/TextBlock'
import styles from './HomePageHero.module.scss'
import { HomePageHeroType } from '_types/cms'
import Heading from '_atoms/Heading/Heading'
import Image from 'next/image'

const HomePagehero = ({
  subHeadline,
  headline,
  number,
  video,
  body,
}: HomePageHeroType) => {
  const diaplyNumber = (digit: number) => (digit < 10 ? '0' + digit : digit)
  return (
    <ComponentLayout innerClass={styles.HomePageHero} addKeyline>
      <div className={styles.text}>
        <Heading level={1} className={styles.headline}>{headline}</Heading>
        <p className={styles.subHeadline}>{subHeadline}</p>
      </div>
      {number && <p className={styles.number}>{diaplyNumber(number)}</p>}
      {video && (
        <div className={styles.video}>
          <button className={styles.playButton}>
            <Image src="/images/arrow.svg" fill alt="open video" />
          </button>
        </div>
      )}
      {body && (
        <div className={styles.body}>
          <TextBlock value={body} />
        </div>
      )}
    </ComponentLayout>
  )
}

export default HomePagehero
