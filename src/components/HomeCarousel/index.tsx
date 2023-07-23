import { useRef, useState } from "react"
import {
  CarouselContent,
  CarouselPages,
  CarouselTextsContainer,
  CarouselTextsWrapper,
  CarouselWrapper,
} from "./styles"
import { useKeenSlider, TrackDetails } from "keen-slider/react"
import ArrowRight from "../../icons/ArrowRight"
import { carouselContents } from "./utils/carouselContents"
import { motion } from "framer-motion"

const HomeCarousel = () => {
  const [details, setDetails] = useState<TrackDetails | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const titleRef = useRef(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
      triggerAnimation()
    },

    detailsChanged(s) {
      setDetails(s.track.details)
    },

    created() {
      setLoaded(true)
    },
  })

  function scaleTransitionEffect(idx: number) {
    if (!details) return {}

    const slide = details.slides[idx]
    const scaleSize = 0.7
    const scale = 1 - (scaleSize - scaleSize * slide.portion)

    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }
  }

  const triggerAnimation = () => {
    titleRef.current++
  }

  return (
    <CarouselWrapper>
      <div ref={sliderRef} className="keen-slider zoom-out">
        {carouselContents.map((content, idx) => (
          <div key={content.id} className="keen-slider__slide zoom-out__slide">
            <CarouselContent style={scaleTransitionEffect(idx)}>
              <img src={content.image} />
              <CarouselTextsContainer>
                <CarouselTextsWrapper>
                  <motion.div className="motionDiv" key={titleRef.current}>
                    <motion.h1
                      initial={{ opacity: 0, y: -200 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeIn",
                        delay: 0.2,
                      }}
                    >
                      {content.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, x: -200 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeIn",
                        delay: 0.2,
                      }}
                    >
                      {content.description}
                    </motion.p>
                    <motion.a
                      initial={{ opacity: 0, x: -200 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.1,
                        ease: "easeIn",
                        delay: 0.2,
                      }}
                    >
                      See Our Portfolio <ArrowRight />
                    </motion.a>
                  </motion.div>
                </CarouselTextsWrapper>
              </CarouselTextsContainer>
            </CarouselContent>
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <CarouselPages>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map(
            (idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={currentSlide === idx ? " active" : ""}
                >
                  0{idx + 1}
                </button>
              )
            }
          )}
        </CarouselPages>
      )}
    </CarouselWrapper>
  )
}

export default HomeCarousel
