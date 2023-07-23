import { HomeMiddleWrapper, Main } from "./styles"
import HomeCarousel from "../../components/HomeCarousel"
import HomeWelcome from "../../components/HomeWelcome"
import HomeBigIdeas from "../../components/HomeBigIdeas"
import HomeFeatured from "../../components/HomeFeatured"

const Home = () => {
  return (
    <Main>
      <HomeMiddleWrapper>
        <HomeCarousel />
        <HomeWelcome />
        <HomeBigIdeas />
        <HomeFeatured />
      </HomeMiddleWrapper>
    </Main>
  )
}

export default Home
