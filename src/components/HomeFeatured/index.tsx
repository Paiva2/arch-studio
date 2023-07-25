import { useIsMobile } from "../../hooks/useMobile"
import ArrowRight from "../../icons/ArrowRight"
import FadeComponent from "../FadeComponent"
import {
  FeaturedContainer,
  FeaturedHeader,
  FeaturedsWrapper,
  PortfolioWrapper,
  ProjectCards,
  ProjectDescriptions,
  ProjectNumber,
  SeAllButton,
  TextsWrapper,
} from "./styles"
import { featuredItems } from "./utils/featuredItems"
import { Link } from "react-router-dom"

const HomeFeatured = () => {
  const isMobile = useIsMobile()

  return (
    <FadeComponent>
      <FeaturedContainer>
        <FeaturedsWrapper>
          <FeaturedHeader>
            <h1>Featured</h1>
            <SeAllButton>
              <Link to="/portfolio">
                See all <ArrowRight />
              </Link>
            </SeAllButton>
          </FeaturedHeader>
          <PortfolioWrapper>
            {featuredItems.map((featured) => {
              return (
                <ProjectCards key={featured.id}>
                  <img src={isMobile ? featured.mobileImage : featured.image} />
                  <ProjectDescriptions>
                    <TextsWrapper>
                      <span>{featured.title}</span>
                      <Link to="/portfolio">View all projects</Link>
                    </TextsWrapper>
                    <ProjectNumber>{featured.id}</ProjectNumber>
                  </ProjectDescriptions>
                </ProjectCards>
              )
            })}
            <SeAllButton>
              <Link to="/portfolio">
                See all <ArrowRight />
              </Link>
            </SeAllButton>
          </PortfolioWrapper>
        </FeaturedsWrapper>
      </FeaturedContainer>
    </FadeComponent>
  )
}

export default HomeFeatured
