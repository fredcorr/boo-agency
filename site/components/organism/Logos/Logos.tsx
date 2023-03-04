import SwiperCarousel from '_molecules/SwiperCarousel/SwiperCarousel'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { KeylineType } from '_types/local/base'
import style from './Logos.module.scss'
import { LogosType } from '_types/cms'
import 'swiper/css'

const Logos = ({ clientLogos, logosCopy, anchorName }: LogosType) => {
  return (
    <ComponentLayout
      addKeyline={KeylineType.SIDES}
      containerClass={style.logos}
      innerClass={style.logoInner}
      id={anchorName?.current}
    >
      {logosCopy && (
        <div className={style.logosCopy}>
          <TextBlock value={logosCopy} />
        </div>
      )}
      {clientLogos && (
        <div className={style.clientLogos}>
          <SwiperCarousel logos={clientLogos}/>
        </div>
      )}
    </ComponentLayout>
  )
}

export default Logos
