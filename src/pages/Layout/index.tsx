import { Route, Routes, BrowserRouter } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Home from "../Home"
import GoTopButton from "../../components/GoTopButton"
import Portfolio from "../Portfolio"

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <GoTopButton />
      <Footer />
    </BrowserRouter>
  )
}

export default Layout
