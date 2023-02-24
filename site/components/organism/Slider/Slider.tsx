import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { Breakpoints } from '_types/local/breakpoints'
import { useState, useLayoutEffect } from 'react'
import Slide from '_molecules/Slide/Slide'
import style from './Slider.module.scss'
import { SliderType } from '_types/cms'
import throttle from 'lodash/throttle'
import { Swiper } from 'swiper/react'
import 'swiper/css'

export interface SliderState {
  isMobile: boolean
  activeSlide: number
}

const Slider = ({ slides }: SliderType) => {
  const indexOfDefualtOpen = slides.findIndex((sld) => sld.isDefaultOpen)
  const [{ activeSlide, isMobile }, setSliderState] = useState<SliderState>({
    activeSlide: indexOfDefualtOpen || 0,
    isMobile: false
  })

  const initiateSlider = throttle(() => {
    if(window.innerWidth < Breakpoints.MD) {
      setSliderState((prvState) => ({...prvState, isMobile: true }))
    } else {
      setSliderState((prvState) => ({...prvState, isMobile: false }))
    }
  }, 500)

  useLayoutEffect(() => {
    window.addEventListener('scroll', initiateSlider, { passive: true })
    initiateSlider()

    return () => {
      window.removeEventListener('scroll', initiateSlider)
    }
  }, [])

  return (
    <ComponentLayout>
      <div className={style.slidesWrapper}>
        <ConditionalWrapper
          condition={!!isMobile}
          wrapper={(children) => (
            <Swiper slidesPerView={1} spaceBetween={0} loop>
              {children}
            </Swiper>
          )}
        >
          <>
            {slides.map((sld, i) => (
              <Slide {...sld} isOpen={activeSlide === i} isMobile key={i} />
            ))}
          </>
        </ConditionalWrapper>
      </div>
    </ComponentLayout>
  )
}

export default Slider
