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
  TextsWrapper,
} from "./styles"
import { featuredItems } from "./utils/featuredItems"
import { Link } from "react-router-dom"

const HomeFeatured = () => {
  return (
    <FadeComponent>
      <FeaturedContainer>
        <FeaturedsWrapper>
          <FeaturedHeader>
            <h1>Featured</h1>
            <span>
              <Link to="#">
                See all <ArrowRight />
              </Link>
            </span>
          </FeaturedHeader>
          <PortfolioWrapper>
            {featuredItems.map((featured) => {
              return (
                <ProjectCards key={featured.id}>
                  <img src={featured.image} />
                  <ProjectDescriptions>
                    <TextsWrapper>
                      <span>{featured.title}</span>
                      <Link to="#">View Linkll projects</Link>
                    </TextsWrapper>
                    <ProjectNumber>{featured.id}</ProjectNumber>
                  </ProjectDescriptions>
                </ProjectCards>
              )
            })}
          </PortfolioWrapper>
        </FeaturedsWrapper>
      </FeaturedContainer>
    </FadeComponent>
  )
}

export default HomeFeatured
