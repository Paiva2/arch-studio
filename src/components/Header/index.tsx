import { useEffect, useState } from "react"
import Logo from "../../icons/Logo"
import {
  HeaderContainer,
  HeaderWrapper,
  Line,
  MenuList,
  MobileMenuTrigger,
  NavItens,
  TopHomeIndicator,
  TopHomeIndicatorText,
} from "./styles"
import { Link, useLocation } from "react-router-dom"
import MenuHamburguer from "../../icons/MenuHamburguer"
import CloseMenuIcon from "../../icons/CloseMenuIcon"

const Header = () => {
  const pathname = useLocation()
  const [path, setPath] = useState("HOME")
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

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

  const closeMenuOnChangePage = () => {
    setOpenMobileMenu(false)
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div onClick={closeMenuOnChangePage}>
          <Link to="/">
            <Logo color="#1B1D23" />
          </Link>
        </div>
        <MobileMenuTrigger
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
          type="button"
        >
          {!openMobileMenu ? <MenuHamburguer /> : <CloseMenuIcon />}
        </MobileMenuTrigger>
        <NavItens showMenu={openMobileMenu}>
          <MenuList>
            <li onClick={closeMenuOnChangePage}>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li onClick={closeMenuOnChangePage}>
              <Link to="/about">About Us</Link>
            </li>
            <li onClick={closeMenuOnChangePage}>
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
