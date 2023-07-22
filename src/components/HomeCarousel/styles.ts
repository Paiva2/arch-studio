import { styled } from "styled-components"

export const CarouselWrapper = styled.section`
  width: 65%;
  max-width: 75rem;
  position: relative;

  .keen-slider {
    display: flex;
    overflow: hidden;

    &.zoom-out {
      perspective: 1000px;
      min-height: 750px;
    }

    &.zoom-out__slide div {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .keen-slider__slide {
    &.zoom-out__slide img {
      background-color: transparent;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      min-height: 700px;
    }
  }
`
export const CarouselContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const CarouselPages = styled.div`
  position: absolute;
  z-index: 1000;
  bottom: 0;
  left: -90px;
  display: flex;

  button {
    all: unset;
    font-family: Spartan, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #535456;
    padding: 35px;
    background-color: #fefffd;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #eeeff4;
    }

    &.active {
      background-color: #1c1d22;
      color: #fefffd;
    }
  }
`

export const CarouselTextsContainer = styled.div`
  z-index: 1000;
  width: 100%;
  align-items: center;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
`

export const CarouselTextsWrapper = styled.div`
  max-width: 43.75rem;
  height: 100%;
  padding: 10.75rem 1.25rem 0px 10.75rem;

  .motionDiv {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    word-break: break-word;

    h1 {
      font-size: 4.375rem;
      color: #fefffd;
    }

    p {
      font-size: 1rem;
      color: #fefffd;
      font-weight: 500;
    }

    a {
      all: unset;
      background-color: #1c1d22;
      color: #fefffd;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 700;
      width: 50%;
      padding: 1.5625rem 1.25rem;
      cursor: pointer;
      gap: 1.25rem;
    }
  }
`
