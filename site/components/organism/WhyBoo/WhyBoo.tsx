import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { Breakpoints } from '_types/local/breakpoints'
import { Swiper, SwiperSlide } from 'swiper/react'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { useState, useLayoutEffect } from 'react'
import Heading from '_atoms/Heading/Heading'
import style from './WhyBoo.module.scss'
import { WhyBooType } from '_types/cms'
import throttle from 'lodash/throttle'
import Stat from '_atoms/Stat/Stat'
import { Autoplay } from 'swiper'
import Image from 'next/image'
import 'swiper/css'

export interface SliderState {
  isMobile: boolean
  activeSlide: number
}

const Slider = ({
  clientLogos,
  slideStats,
  number,
  title,
  label,
  body,
}: WhyBooType) => {
  return (
    <ComponentLayout innerClass={style.whyBoo} data-has-stats={!!slideStats}>
      <Heading level={1} className={style.title}>
        {title}
      </Heading>
      <p className={style.number}>{number < 10 ? `0${number}` : number}</p>
      {label && <p className={style.label}>{label}</p>}
      {clientLogos && (
        <div className={style.clientLogos}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={0}
            breakpoints={{
              [Breakpoints.SM]: {
                slidesPerView: 1.5
              },
              [Breakpoints.MD]: {
                slidesPerView: 3.5
              }
            }}
            autoplay={{
              delay: 1,
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
      {body && (
        <div className={style.body}>
          <TextBlock value={body} />
        </div>
      )}
      {slideStats && (
        <div className={style.stats}>
          {slideStats.map((st, i) => <Stat {...st} key={i} />)}
        </div>
      )}
    </ComponentLayout>
  )
}

export default Slider
