import Header from "./components/Header"
import HomeCarousel from "./components/HomeCarousel"

function App() {
  return (
    <>
      <Header />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          paddingTop: "3.125rem",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HomeCarousel />
        </div>
      </main>
    </>
  )
}

export default App
