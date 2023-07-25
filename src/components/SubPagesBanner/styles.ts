import { styled } from "styled-components"

export const SubPagesContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    max-width: 39.6875rem;
  }
`

export const ImageOpacity = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  height: 100%;
  max-width: 39.6875rem;
  width: 100%;
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

  @media (max-width: 940px) {
    width: 90%;
    height: 65%;
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
`

export const SubPagesBigText = styled.h1`
  position: absolute;
  font-size: 12.5rem;
  color: #eeeff4;
  font-weight: 700;
  top: -80px;
  right: 20px;

  @media (max-width: 940px) {
    font-size: 7.5rem;
  }
`
