import { styled } from "styled-components"

export const ProjectCards = styled.div`
  display: flex;
  flex-direction: column;
  height: 35rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  @media (max-width: 48rem) {
    height: 15.625rem;
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

  span:last-child {
    all: unset;
    font-size: 0.875rem;
  }
`

export const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 23.75rem);
  gap: 1.875rem;
  justify-content: space-between;

  @media (max-width: 58.75rem) {
    grid-template-columns: repeat(auto-fit, 18.125rem);
    justify-content: center;
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(auto-fit, 90%);
  }
`
