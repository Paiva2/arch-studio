import { Fragment } from "react"
import { HomeMiddleWrapper, Main } from "./styles"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeBigIdeas from "./components/HomeBigIdeas"
import HomeCarousel from "./components/HomeCarousel"
import HomeFeatured from "./components/HomeFeatured"
import HomeWelcome from "./components/HomeWelcome"

function App() {
  return (
    <Fragment>
      <Header />
      <Main>
        <HomeMiddleWrapper>
          <HomeCarousel />
          <HomeWelcome />
          <HomeBigIdeas />
          <HomeFeatured />
        </HomeMiddleWrapper>
      </Main>
      <Footer />
    </Fragment>
  )
}

export default App
