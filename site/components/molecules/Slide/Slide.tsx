import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
import TextBlock from '_atoms/TextBlock/TextBlock'
import { Swiper, SwiperSlide } from 'swiper/react'
import Heading from '_atoms/Heading/Heading'
import ArrowRight from '_svgs/ArrowRight'
import style from './Slide.module.scss'
import { SlidesType } from '_types/cms'
import Stat from '_atoms/Stat/Stat'
import { Autoplay } from 'swiper'
import Image from 'next/image'
import 'swiper/css/autoplay'
import 'swiper/css'

interface SlideProps extends SlidesType {
  isMobile: boolean
  isOpen: boolean
}

const Slide = ({
  positionNextButton,
  slideLabel,
  slideStats,
  slideLogos,
  slideTitle,
  slideBody,
  isMobile,
  isOpen,
}: SlideProps) => {
  return (
    <ConditionalWrapper
      wrapper={(children) => <SwiperSlide>{children}</SwiperSlide>}
      condition={!!isMobile}
    >
      <div className={style.slide} data-is-open={isOpen}>
        {isOpen ? (
          <>
            <Heading level={1} className={style.slideTitle}>
              {slideTitle}
            </Heading>
            {slideBody && (
              <div className={style.slideBody}>
                <TextBlock value={slideBody} />
              </div>
            )}
            {positionNextButton && (
              <button
                data-position={positionNextButton}
                className={style.slideButton}
              >
                <ArrowRight />
              </button>
            )}
            {slideLogos && (
              <div className={style.slideLogos}>
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={3.25}
                  loopedSlides={50}
                  spaceBetween={0}
                  speed={6000}
                  loop={true}
                  autoplay={{
                    delay: 1,
                  }}
                >
                  {slideLogos.map((logo, key) => {
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
            {slideStats && (
              <div className={style.slideStats}>
                {slideStats.map((stat, key) => (
                  <Stat {...stat} key={key} />
                ))}
              </div>
            )}
          </>
        ) : (
          <p className={style.slideLabel}>{slideLabel}</p>
        )}
      </div>
    </ConditionalWrapper>
  )
}

export default Slide
