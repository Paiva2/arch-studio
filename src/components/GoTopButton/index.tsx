import ArrowUp from "../../icons/ArrowUp"
import { useEffect, useRef } from "react"
import { GoTopWrapper } from "./styles"

const GoTopButton = () => {
  const goTopButtonRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!window) return

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        goTopButtonRef.current?.classList.add("show")
      } else {
        goTopButtonRef.current?.classList.remove("show")
      }
    })
  }, [])

  function handleGoTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <GoTopWrapper ref={goTopButtonRef}>
      <button onClick={handleGoTop} type="button">
        <ArrowUp />
      </button>
    </GoTopWrapper>
  )
}

export default GoTopButton
