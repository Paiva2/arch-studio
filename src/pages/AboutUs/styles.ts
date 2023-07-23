import { styled } from "styled-components"

export const AboutContainer = styled.div`
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

export const AboutUsTexts = styled.div`
  position: absolute;
  width: 60%;
  height: 70%;
  bottom: 0;
  right: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
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

export const AboutBigText = styled.h1`
  position: absolute;
  font-size: 12.5rem;
  color: #eeeff4;
  font-weight: 700;
  top: -80px;
  right: 20px;
`

export const HeritageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  margin-top: 6rem;
`

export const HeritageTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8125rem;
  padding-right: 2.8125rem;

  h1 {
    font-size: 3.125rem;
    color: #1c1d22;
  }

  p {
    line-height: 1.4rem;
    font-size: 1rem;
    color: #535456;
  }
`

export const HeritageImage = styled.div`
  min-height: 35rem;
  min-width: 33.75rem;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const HeritageImageOpacity = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.1);
`

export const Leaders = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1.875rem;
  margin-top: 6rem;
`

export const LeadersTitle = styled.div`
  flex: 1;

  h1 {
    color: #1c1d22;
    font-size: 3.125rem;
  }
`

export const LeaderCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 21.875rem);
  gap: 1.5625rem;
  width: 100%;
  justify-content: end;
`

export const LeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
export const LeaderCardWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const LeaderSocialMediaContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  gap: 1.25rem;
  opacity: 0;
  transition: 0.2s ease-in-out;

  span {
    cursor: pointer;
  }

  &:hover {
    opacity: 1;
  }
`

export const LeaderTexts = styled.div`
  color: #1c1d22;

  h3 {
    margin-bottom: 5px;
    font-size: 1rem;
    font-weight: 700;
  }
`
