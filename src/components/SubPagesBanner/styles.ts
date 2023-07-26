import { styled } from "styled-components"

export const SubPagesContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    max-width: 39.6875rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    align-self: center;
  }
`

export const ImageOpacity = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    left: 0;
    height: 100%;
    max-width: 39.6875rem;
    width: 100%;
    z-index: 1000;
    max-height: 45rem;
  }

  @media (max-width: 768px) {
    img {
      max-height: 15rem;
    }
  }
`

export const SubPagesTexts = styled.div`
  position: absolute;
  width: 60%;
  height: 70%;
  bottom: -1px;
  right: -1px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  z-index: 1000;

  @media (max-width: 60rem) {
    width: 90%;
    height: 65%;
  }

  @media (max-width: 48rem) {
    width: 95%;
    padding: 2.1875rem 0.3125rem;
    position: initial;
    padding-right: 0.9375rem;
  }
`

export const TextsWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  padding-bottom: 1.25rem;

  h3 {
    font-size: 3.125rem;
    color: #1c1d22;
  }

  p {
    font-size: 1rem;
    color: #535456;
    letter-spacing: +1px;
    line-height: 1.4rem;
  }

  &::before {
    content: "";
    background-color: #eeeff4;
    width: 50px;
    height: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: relative;
    padding-right: 2.5rem;

    h3 {
      font-size: 1.875rem;
    }

    &::before {
      content: "";
      background-color: #fff;
      height: 30px;
      top: -65px;
      left: -5px;
      position: absolute;
      width: 100%;
      z-index: 1000;
    }
  }
`

export const SubPagesBigText = styled.h1`
  position: absolute;
  font-size: 12.5rem;
  color: #eeeff4;
  font-weight: 700;
  top: -80px;
  right: 20px;

  @media (max-width: 79.25rem) {
    font-size: 9.375rem;
  }

  @media (max-width: 71.875rem) {
    top: -120px;
  }

  @media (max-width: 60.5rem) {
    font-size: 7.5rem;
  }

  @media (max-width: 48rem) {
    display: none;
  }
`
