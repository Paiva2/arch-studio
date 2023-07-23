import CarouselLinkArrow from "../../icons/CarouselLinkArrow"
import Logo from "../../icons/Logo"
import {
  FooterContainer,
  FooterContents,
  FooterLogo,
  FooterNavList,
  FooterWrapper,
  SeePortfolio,
} from "./styles"

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
              <li>Portfolio</li>
              <li>About Us</li>
              <li>Contact</li>
            </FooterNavList>
          </div>
          <SeePortfolio>
            <a>
              See Our Portfolio <CarouselLinkArrow />
            </a>
          </SeePortfolio>
        </FooterContents>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
