import SwiperCarousel from '_molecules/SwiperCarousel/SwiperCarousel'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { KeylineType } from '_types/local/base'
import style from './WhyBoo.module.scss'
import { WhyBooType } from '_types/cms'
import Stat from '_atoms/Stat/Stat'
import GradientBackground from '_atoms/GradientBackground/GradientBackground'

export interface SliderState {
  isMobile: boolean
  activeSlide: number
}

const Slider = ({
  clientLogos,
  slideStats,
  anchorName,
  number,
  title,
  label,
  body,
}: WhyBooType) => {
  return (
    <ComponentLayout
      addKeyline={KeylineType.All_SIDES}
      data-has-logos={!!clientLogos}
      data-has-stats={!!slideStats}
      innerClass={style.whyBoo}
      id={anchorName?.current}
    >
      {title && (
        <div className={style.title}>
          <TextBlock value={title} />
        </div>
      )}
      <p className={style.number}>{number < 10 ? `0${number}` : number}</p>
      {label && <p className={style.label}>{label}</p>}
      {body && (
        <div className={style.body}>
          <TextBlock value={body} />
        </div>
      )}
      {clientLogos && (
        <>
        <div className={style.gradient}>
          <GradientBackground />
        </div>
        <div className={style.clientLogos}>
          <SwiperCarousel logos={clientLogos} />
        </div>
        </>
      )}
      {slideStats && (
        <>
          <span className={style.background} />
          {slideStats.map((st, i) => <Stat {...st} number={i} key={i} />)}
        </>
      )}
    </ComponentLayout>
  )
}

export default Slider
