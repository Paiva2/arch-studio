import { useEffect, useState } from "react"
import Logo from "../../icons/Logo"
import {
  HeaderContainer,
  HeaderWrapper,
  Line,
  MenuList,
  NavItens,
  TopHomeIndicator,
  TopHomeIndicatorText,
} from "./styles"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const pathname = useLocation()
  const [path, setPath] = useState("HOME")

  useEffect(() => {
    if (pathname.pathname.includes("contact")) {
      setPath("CONTACT")
    } else if (pathname.pathname.includes("about")) {
      setPath("ABOUT US")
    } else if (pathname.pathname.includes("portfolio")) {
      setPath("PORTFOLIO")
    } else {
      setPath("HOME")
    }
  }, [pathname])

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div>
          <Link to="/">
            <Logo color="#1B1D23" />
          </Link>
        </div>
        <NavItens>
          <MenuList>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </MenuList>
        </NavItens>
        <TopHomeIndicator>
          <Line />
          <TopHomeIndicatorText>{path}</TopHomeIndicatorText>
        </TopHomeIndicator>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
