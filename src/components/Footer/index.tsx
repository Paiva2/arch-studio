import ArrowRight from "../../icons/ArrowRight"
import Logo from "../../icons/Logo"
import {
  FooterContainer,
  FooterContents,
  FooterLogo,
  FooterNavList,
  FooterWrapper,
  SeePortfolio,
} from "./styles"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContents>
          <FooterLogo>
            <Logo color="#fff" />
          </FooterLogo>
          <div>
            <FooterNavList>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </FooterNavList>
          </div>
          <SeePortfolio>
            <Link to="/portfolio">
              See Our Portfolio <ArrowRight />
            </Link>
          </SeePortfolio>
        </FooterContents>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
