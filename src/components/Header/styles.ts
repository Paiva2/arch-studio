import { styled } from "styled-components"

export const HeaderContainer = styled.div`
  padding-top: 3.125rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: 960px) {
    .menu-hamburguer {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding-top: 1.125rem;
  }
`

export const HeaderWrapper = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  gap: 4.375rem;
  max-width: 75rem;

  div:first-child {
    svg {
      cursor: pointer;
    }
  }

  @media (max-width: 60rem) {
    width: 80%;
    gap: 2.375rem;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`
interface ShowMobileMenu {
  showMenu: boolean
}

export const NavItens = styled.nav<ShowMobileMenu>`
  width: 100%;
  display: flex;

  @media (max-width: 60rem), (max-width: 48rem) {
    visibility: ${({ showMenu }) => (showMenu ? "visible" : "hidden")};
    opacity: ${({ showMenu }) => (showMenu ? "1" : "0")};
    position: absolute;
    background-color: #fff;
    z-index: 1500;
    width: 100%;
    top: 100%;
    left: 0;
    right: 0;
    transition: all 0.2s ease-in-out;

    ul {
      align-items: center;
      padding-top: 3.125rem;
      padding-bottom: 3.125rem;
      justify-content: center;
      height: 100%;
    }
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

  @media (max-width: 60rem) {
    gap: 1.125rem;
  }

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`

export const MobileMenuTrigger = styled.button`
  all: unset;
`

export const TopHomeIndicator = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 100%;
  min-height: 18.75rem;
  justify-content: space-between;

  @media (max-width: 960px) {
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
