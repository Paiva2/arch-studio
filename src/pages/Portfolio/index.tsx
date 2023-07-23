import FadeComponent from "../../components/FadeComponent"
import PageContainer from "../../components/PageContainer"
import {
  PortfolioWrapper,
  ProjectCards,
  ProjectDescriptions,
  TextsWrapper,
} from "./styles"
import { portfolioItems } from "./utils/portfolioItems"

const Portfolio = () => {
  return (
    <FadeComponent>
      <PageContainer>
        <PortfolioWrapper>
          {portfolioItems.map((portfolio) => {
            return (
              <ProjectCards key={portfolio.id}>
                <img src={portfolio.image} />
                <ProjectDescriptions>
                  <TextsWrapper>
                    <span>{portfolio.title}</span>
                    <span>{portfolio.year}</span>
                  </TextsWrapper>
                </ProjectDescriptions>
              </ProjectCards>
            )
          })}
        </PortfolioWrapper>
      </PageContainer>
    </FadeComponent>
  )
}

export default Portfolio
