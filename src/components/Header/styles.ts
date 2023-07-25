import { styled } from "styled-components"

export const HeaderContainer = styled.div`
  padding-top: 3.125rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 940px) {
    .menu-hamburguer {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`

export const HeaderWrapper = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  gap: 4.375rem;
  max-width: 75rem;
  position: relative;

  div:first-child {
    svg {
      cursor: pointer;
    }
  }

  @media (max-width: 58.75rem) {
    width: 80%;
    gap: 2.375rem;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const NavItens = styled.nav`
  width: 100%;
  display: none;

  @media (min-width: 940px) {
    display: flex;
  }
`
export const MenuList = styled.ul`
  font-weight: bold;
  color: #1c1d22;
  width: 100%;
  display: flex;
  list-style: none;
  margin-top: 0.9375rem;
  gap: 3.125rem;

  li {
    width: calc(100% / 3);
    max-width: 6.25rem;
    transition: color 0.2s ease;

    a {
      width: 100%;
      cursor: pointer;
    }

    &:hover {
      color: #535456;
    }
  }

  @media (max-width: 940px) {
    gap: 1.125rem;
  }
`
export const TopHomeIndicator = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 100%;
  min-height: 18.75rem;
  justify-content: space-between;

  @media (max-width: 940px) {
    right: 90%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Line = styled.div`
  width: 1px;
  height: 9.375rem;
  background: #eeeff4;
`

export const TopHomeIndicatorText = styled.div`
  transform: rotate(90deg);
  color: #eeeff4;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.7rem;
  display: flex;
  align-items: center;
  width: 13.125rem;
`
