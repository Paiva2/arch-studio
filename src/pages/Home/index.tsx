import { HomeMiddleWrapper, Main } from "./styles"
import HomeCarousel from "../../components/HomeCarousel"
import HomeWelcome from "../../components/HomeWelcome"
import HomeBigIdeas from "../../components/HomeBigIdeas"
import HomeFeatured from "../../components/HomeFeatured"
import FadeComponent from "../../components/FadeComponent"
import { Helmet } from "react-helmet"
import { Fragment } from "react"

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Arch Studio | Home</title>
      </Helmet>
      <Main>
        <FadeComponent>
          <HomeMiddleWrapper>
            <HomeCarousel />
            <HomeWelcome />
            <HomeBigIdeas />
            <HomeFeatured />
          </HomeMiddleWrapper>
        </FadeComponent>
      </Main>
    </Fragment>
  )
}

export default Home
