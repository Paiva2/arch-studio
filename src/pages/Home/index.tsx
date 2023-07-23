import { HomeMiddleWrapper, Main } from "./styles"
import HomeCarousel from "../../components/HomeCarousel"
import HomeWelcome from "../../components/HomeWelcome"
import HomeBigIdeas from "../../components/HomeBigIdeas"
import HomeFeatured from "../../components/HomeFeatured"
import FadeComponent from "../../components/FadeComponent"

const Home = () => {
  return (
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
  )
}

export default Home
