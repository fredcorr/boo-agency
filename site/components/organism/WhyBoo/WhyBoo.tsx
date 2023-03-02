import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import TextBlock from '_atoms/TextBlock/TextBlock'
import Heading from '_atoms/Heading/Heading'
import style from './WhyBoo.module.scss'
import { WhyBooType } from '_types/cms'
import Stat from '_atoms/Stat/Stat'

export interface SliderState {
  isMobile: boolean
  activeSlide: number
}

const Slider = ({
  slideStats,
  anchorName,
  number,
  title,
  label,
  body,
}: WhyBooType) => {
  return (
    <ComponentLayout
      data-has-stats={!!slideStats}
      innerClass={style.whyBoo}
      id={anchorName?.current}
    >
      <Heading level={1} className={style.title}>
        {title}
      </Heading>
      <p className={style.number}>{number < 10 ? `0${number}` : number}</p>
      {label && <p className={style.label}>{label}</p>}
      {body && (
        <div className={style.body}>
          <TextBlock value={body} />
        </div>
      )}
      {slideStats && (
        <div className={style.stats}>
          {slideStats.map((st, i) => (
            <Stat {...st} key={i} />
          ))}
        </div>
      )}
    </ComponentLayout>
  )
}

export default Slider
