import { styled } from "styled-components"

export const FeaturedContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`

export const FeaturedsWrapper = styled.div`
  width: 65%;
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  gap: 3.125rem;

  @media (max-width: 58.75rem) {
    width: 80%;
  }
`

export const FeaturedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  h1 {
    font-size: 3.125rem;
    color: #1c1d22;
  }

  @media (max-width: 48rem) {
    justify-content: center;

    span {
      display: none;
    }

    h1 {
      font-size: 1.875rem;
    }
  }
`

export const SeAllButton = styled.span`
  margin-bottom: 5rem;

  a {
    all: unset;
    background-color: #1c1d22;
    color: #fefffd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    padding: 1.5625rem;
    cursor: pointer;
    gap: 1.25rem;
    transition: all 0.3s;

    &:hover {
      background-color: #535456;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      width: 40%;
    }
  }
`

export const ProjectCards = styled.div`
  display: flex;
  flex-direction: column;
  height: 35rem;
  position: relative;

  img {
    width: 100%;
    max-width: 21.875rem;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  @media (max-width: 58.75rem) {
    height: 15.625rem;

    img {
      object-fit: cover;
      max-width: none;
    }
  }
`

export const ProjectDescriptions = styled.div`
  display: flex;
  z-index: 1000;
  color: #fefffd;
  height: 100%;
  width: 100%;
  flex-direction: column;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const TextsWrapper = styled.div`
  display: flex;
  height: 100%;
  align-self: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding: 2.1875rem;
  gap: 0.3125rem;

  span {
    font-size: 1.25rem;
    font-weight: bold;
  }

  a {
    all: unset;
    font-size: 0.875rem;
    cursor: pointer;
  }
`

export const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 21.875rem);
  justify-content: space-between;
  gap: 1.25rem;

  @media (max-width: 58.75rem) {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 18.4375rem);
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(auto-fit, 90%);
  }
`

export const ProjectNumber = styled.div`
  position: absolute;
  right: 0px;
  top: 15px;
  font-size: 10.625rem;
  font-weight: bold;
  opacity: 0.4;

  @media (max-width: 768px) {
    display: none;
  }
`
