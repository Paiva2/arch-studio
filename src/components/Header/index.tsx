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
          <Logo color="#1B1D23" />
        </div>
        <NavItens>
          <MenuList>
            <li>
              <Link to="/">Portfolio</Link>
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
