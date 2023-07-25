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

  @media (max-width: 940px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
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
    padding: 2.1875rem;
    background-color: #fefffd;
    cursor: pointer;
    transition: background-color 0.2s;
    display: grid;
    place-items: center;

    &:hover {
      background-color: #eeeff4;
    }

    &.active {
      background-color: #1c1d22;
      color: #fefffd;
    }
  }

  @media (max-width: 940px) {
    left: 0;
  }

  @media (max-width: 768px) {
    position: initial;
    justify-content: space-between;

    button {
      padding: 1.875rem 0px;
      width: calc(100% / 4);
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

  @media (max-width: 940px) {
    height: auto;
    padding: 0;
    display: flex;
    justify-content: center;
  }

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
      width: 45%;
      padding: 1.5625rem 20px;
      cursor: pointer;
      gap: 1.25rem;
      transition: all 0.3s;

      &:hover {
        background-color: #535456;
      }
    }

    @media (max-width: 58.75rem) {
      width: 90%;
      justify-content: center;

      p {
        width: 85%;
      }

      h1 {
        font-size: 2.25rem;
      }
    }

    @media (max-width: 768px) {
      a {
        width: 70%;
      }
    }
  }
`
