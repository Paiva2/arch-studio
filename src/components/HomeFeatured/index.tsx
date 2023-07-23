import CarouselLinkArrow from "../../icons/CarouselLinkArrow"
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

const featuredItems = [
  {
    id: "1",
    title: "Project Del So",
    image: "https://i.postimg.cc/zXqbNd3f/image-del-sol.jpg",
  },
  {
    id: "2",
    title: "Le Prototype",
    image: "https://i.postimg.cc/rFgdwStN/image-prototype.jpg",
  },
  {
    id: "3",
    title: "228B Tower",
    image: "https://i.postimg.cc/qvRNhzsV/image-228b.jpg",
  },
]

const HomeFeatured = () => {
  return (
    <FeaturedContainer>
      <FeaturedsWrapper>
        <FeaturedHeader>
          <h1>Featured</h1>
          <span>
            <a>
              See all <CarouselLinkArrow />
            </a>
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
                    <a>View all projects</a>
                  </TextsWrapper>

                  <ProjectNumber>{featured.id}</ProjectNumber>
                </ProjectDescriptions>
              </ProjectCards>
            )
          })}
        </PortfolioWrapper>
      </FeaturedsWrapper>
    </FeaturedContainer>
  )
}

export default HomeFeatured
