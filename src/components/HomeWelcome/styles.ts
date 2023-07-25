import { styled } from "styled-components"

export const WelcomeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`

export const WelcomeWrapper = styled.div`
  width: 65%;
  max-width: 75rem;
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  position: relative;

  @media (max-width: 58.75rem) {
    width: 80%;

    img {
      width: 40%;
    }
  }
`

export const WelcomeTexts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`

export const WelcomeTextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  align-items: center;
  width: 55%;

  h1 {
    font-size: 3.125rem;
    color: #1c1d22;
  }

  p {
    font-size: 1rem;
    color: #535456;
    line-height: 1.5rem;
  }

  @media (max-width: 940px) {
    width: 100%;
  }
`

export const WelcomeText = styled.h1`
  position: absolute;
  font-size: 12.5rem;
  color: #eeeff4;
  font-weight: 700;
  top: -100px;
  left: 5%;

  @media (max-width: 58.75rem) {
    font-size: 5.625rem;
  }
`
