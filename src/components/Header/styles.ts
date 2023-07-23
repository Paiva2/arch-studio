import { styled } from "styled-components"

export const HeaderContainer = styled.div`
  padding-top: 3.125rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
`

export const NavItens = styled.nav`
  width: 100%;
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
`
export const TopHomeIndicator = styled.div`
  align-items: center;
  gap: 5.3125rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 100%;
`

export const Line = styled.div`
  width: 1px;
  height: 9.375rem;
  background: #eeeff4;
`

export const TopHomeIndicatorText = styled.span`
  transform: rotate(90deg);
  color: #eeeff4;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.7rem;
`
