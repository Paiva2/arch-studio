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
