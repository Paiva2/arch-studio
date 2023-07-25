import { styled } from "styled-components"

export const HeritageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  margin-top: 6rem;

  @media (max-width: 768px) {
    margin-top: 0;
  }
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

  @media (max-width: 60rem) {
    width: 60%;
  }

  @media (max-width: 48rem) {
    justify-content: center;
    width: 100%;
    padding: 25px;

    h1 {
      font-size: 1.875rem;
    }
  }
`

export const HeritageImage = styled.div`
  min-height: 35rem;
  position: relative;
  width: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 60rem) {
    min-width: initial;
    width: 40%;
  }

  @media (max-width: 768px) {
    display: none;
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

  @media (max-width: 60rem) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`

export const LeadersTitle = styled.div`
  flex: 1;

  h1 {
    color: #1c1d22;
    font-size: 3.125rem;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 1.875rem;
    }
  }
`

export const LeaderCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 21.875rem);
  gap: 1.5625rem;
  width: 100%;
  justify-content: end;

  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, 295px);
    justify-content: center;
  }
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

  @media (max-width: 60rem) {
    display: none;
  }
`

export const LeaderTexts = styled.div`
  color: #1c1d22;

  h3 {
    margin-bottom: 0.3125rem;
    font-size: 1rem;
    font-weight: 700;
  }
`
export const SocialMediasMobile = styled.div`
  align-items: center;
  width: 100%;
  gap: 1.25rem;
  display: none;

  svg {
    fill: black;
  }

  @media (max-width: 60rem) {
    display: flex;
  }
`
