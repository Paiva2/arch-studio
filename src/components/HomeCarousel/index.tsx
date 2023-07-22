import { useState } from "react"
import { CarouselContent, CarouselPages, CarouselWrapper } from "./styles"
import { useKeenSlider, TrackDetails } from "keen-slider/react"
import CarouselLinkArrow from "../../icons/CarouselLinkArrow"

const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
]

const HomeCarousel = () => {
  const [details, setDetails] = useState<TrackDetails | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },

    detailsChanged(s) {
      setDetails(s.track.details)
    },

    created() {
      setLoaded(true)
    },
  })

  function scaleStyle(idx: number) {
    if (!details) return {}

    const slide = details.slides[idx]
    const scaleSize = 0.7
    const scale = 1 - (scaleSize - scaleSize * slide.portion)

    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }
  }

  return (
    <CarouselWrapper>
      <div ref={sliderRef} className="keen-slider zoom-out">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide zoom-out__slide">
            <CarouselContent style={scaleStyle(idx)}>
              <img src={src} />

              <div
                style={{
                  zIndex: "1000",
                  width: "100%",
                  alignItems: "center",
                  height: "100%",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    maxWidth: "700px",
                    height: "100%",
                    padding: "10.75rem 20px 0px 10.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    wordBreak: "break-word",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "80px",
                      color: "#fefffd",
                    }}
                  >
                    Project Paramour
                  </h1>

                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#fefffd",
                      fontWeight: "500",
                    }}
                  >
                    Project made for an art museum near Southwest London. Project
                    Paramour is a statement of bold, modern architecture.
                  </p>
                  <a
                    href="/"
                    style={{
                      all: "unset",
                      backgroundColor: "#1c1d22",
                      color: "#fefffd",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontWeight: "700",
                      width: "50%",
                      padding: "25px 20px",
                      cursor: "pointer",
                      gap: "20px",
                    }}
                  >
                    See Our Portfolio <CarouselLinkArrow />
                  </a>
                </div>
              </div>
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
                  className={"dot" + (currentSlide === idx ? " active" : "")}
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
