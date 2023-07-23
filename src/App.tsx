import Header from "./components/Header"
import HomeBigIdeas from "./components/HomeBigIdeas"
import HomeCarousel from "./components/HomeCarousel"
import HomeWelcome from "./components/HomeWelcome"
import { HomeMiddleWrapper, Main } from "./styles"

function App() {
  return (
    <>
      <Header />
      <Main>
        <HomeMiddleWrapper>
          <HomeCarousel />
          <HomeWelcome />
          <HomeBigIdeas />
        </HomeMiddleWrapper>
      </Main>
    </>
  )
}

export default App
