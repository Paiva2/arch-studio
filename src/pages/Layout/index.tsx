import { Route, Routes, BrowserRouter } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Home from "../Home"

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Layout
