import { Route, Routes, BrowserRouter } from "react-router-dom"
import Header from "../components/Header"
import Home from "../pages/Home"
import Portfolio from "../pages/Portfolio"
import AboutUs from "../pages/AboutUs"
import GoTopButton from "../components/GoTopButton"
import Footer from "../components/Footer"
import Contact from "../pages/Contact"

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <GoTopButton />
      <Footer />
    </BrowserRouter>
  )
}

export default Layout
