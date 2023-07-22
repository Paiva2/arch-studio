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

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div>
          <Logo />
        </div>
        <NavItens>
          <MenuList>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact</a>
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
