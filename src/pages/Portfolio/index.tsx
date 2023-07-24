import { Fragment } from "react"
import FadeComponent from "../../components/FadeComponent"
import PageContainer from "../../components/PageContainer"
import {
  PortfolioWrapper,
  ProjectCards,
  ProjectDescriptions,
  TextsWrapper,
} from "./styles"
import { portfolioItems } from "./utils/portfolioItems"
import { Helmet } from "react-helmet"

const Portfolio = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Arch Studio | Portfolio</title>
      </Helmet>
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
    </Fragment>
  )
}

export default Portfolio
