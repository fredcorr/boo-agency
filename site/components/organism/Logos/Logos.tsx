import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { Breakpoints } from '_types/local/breakpoints'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { Swiper, SwiperSlide } from 'swiper/react'
import { KeylineType } from '_types/local/base'
import style from './Logos.module.scss'
import { LogosType } from '_types/cms'
import { Autoplay } from 'swiper'
import Image from 'next/image'
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
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={0}
            breakpoints={{
              [Breakpoints.SM]: {
                slidesPerView: 1.5,
              },
              [Breakpoints.MD]: {
                slidesPerView: 3.5,
              },
            }}
          >
            {clientLogos.map((logo, key) => {
              return (
                <SwiperSlide key={key} className={style.singleLogo}>
                  <Image
                    height={logo.asset.metadata.dimensions.height}
                    width={logo.asset.metadata.dimensions.width}
                    alt={logo.asset.originalFilename}
                    src={logo.asset.url}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      )}
    </ComponentLayout>
  )
}

export default Logos
