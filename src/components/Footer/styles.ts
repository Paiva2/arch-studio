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

  @media (max-width: 58.75rem) {
    width: 100%;
  }
`

export const FooterContents = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  background-color: #eeeff4;
`

export const FooterLogo = styled.div`
  padding: 4.6875rem 3.125rem;
  background-color: #1b1d23;
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

  @media (max-width: 940px) {
    gap: 1.125rem;
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
`
