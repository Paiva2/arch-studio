import { styled } from "styled-components"

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

  @media (max-width: 58.75rem) {
    width: 60%;
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

  @media (max-width: 58.75rem) {
    min-width: initial;
    width: 40%;
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

  @media (max-width: 940px) {
    flex-direction: column;
  }
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

  @media (max-width: 940px) {
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

  @media (max-width: 58.75rem) {
    display: none;
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
export const SocialMediasMobile = styled.div`
  align-items: center;
  width: 100%;
  gap: 1.25rem;
  display: none;

  svg {
    fill: black;
  }

  @media (max-width: 58.75rem) {
    display: flex;
  }
`
