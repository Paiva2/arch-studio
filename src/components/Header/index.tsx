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
import { Link } from "react-router-dom"

const Header = () => {
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
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </MenuList>
        </NavItens>
        <TopHomeIndicator>
          <Line />
          <TopHomeIndicatorText>HOME</TopHomeIndicatorText>
        </TopHomeIndicator>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
