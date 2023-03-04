import { Breakpoints } from '_types/local/breakpoints'
import { Swiper, SwiperSlide } from 'swiper/react'
import style from './SwiperCarousel.module.scss'
import { Image as ImageType } from '_types/cms'
import { Autoplay } from 'swiper'
import Image from 'next/image'
import 'swiper/css'

export interface SwiperCarousel {
  logos: ImageType[]
}

const SwiperCarousel = ({ logos }: SwiperCarousel) => {
  return (
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
      autoplay
    >
      {logos.map((logo, key) => {
        return (
          <SwiperSlide key={key} className={style.singleLogo}>
            <div className={style.imageWrapper}>
              <Image
                height={logo.asset.metadata.dimensions.height}
                width={logo.asset.metadata.dimensions.width}
                alt={logo.asset.originalFilename}
                src={logo.asset.url}
              />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwiperCarousel
