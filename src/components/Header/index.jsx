import React from "react"
import Logo from "../../icons/Logo"

export const Header = () => {
  return (
    <header
      style={{
        paddingTop: "50px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          gap: "70px",
          maxWidth: "70rem",
        }}
      >
        <div>
          <Logo />
        </div>
        <nav>
          <ul
            style={{
              fontWeight: "bold",
              color: "#1c1d22",
              width: "100%",
              display: "flex",
              listStyle: "none",
              gap: "60px",
              marginTop: "15px",
            }}
          >
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
