import { styled } from "styled-components"

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`

export const FooterWrapper = styled.div`
  width: 65%;
  max-width: 75rem;
  position: relative;

  @media (max-width: 60rem) {
    width: 100%;
  }
`

export const FooterContents = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  background-color: #eeeff4;

  @media (max-width: 48rem) {
    width: 100%;
    flex-direction: column;
    position: relative;
    gap: 1.5rem;
    padding: 4.125rem;
  }
`

export const FooterLogo = styled.div`
  padding: 4.6875rem 3.125rem;
  background-color: #1b1d23;

  @media (max-width: 48rem) {
    position: absolute;
    padding: 0px;
    top: -55px;
    padding: 1.5625rem 1.25rem;
  }
`

export const FooterNavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0px 0px 0px 3.125rem;
  gap: 3.125rem;
  font-weight: 700;
  color: #1c1d22;
  width: 100%;

  li {
    cursor: pointer;
  }

  @media (max-width: 960px) {
    gap: 1.125rem;
  }

  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
    gap: 1.875rem;
  }
`

export const SeePortfolio = styled.span`
  position: absolute;
  right: 0px;

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

  @media (max-width: 48rem) {
    position: initial;

    a {
      padding: 1.5625rem 1.25rem;
    }
  }
`
