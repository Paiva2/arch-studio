import Logo from "../../icons/Logo"

const Header = () => {
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
          width: "55%",
          display: "flex",
          alignItems: "center",
          gap: "70px",
          maxWidth: "70rem",
          position: "relative",
        }}
      >
        <div>
          <Logo />
        </div>
        <nav
          style={{
            width: "100%",
          }}
        >
          <ul
            style={{
              fontWeight: "bold",
              color: "#1c1d22",
              width: "100%",
              display: "flex",
              listStyle: "none",
              marginTop: "15px",
              gap: "50px",
            }}
          >
            <li
              style={{
                width: "33.3%",
                maxWidth: "100px",
              }}
            >
              <a
                style={{
                  width: "100%",
                }}
                href="/"
              >
                Portfolio
              </a>
            </li>
            <li
              style={{
                width: "33.3%",
                maxWidth: "100px",
              }}
            >
              <a
                style={{
                  width: "100%",
                }}
                href="/"
              >
                About Us
              </a>
            </li>
            <li
              style={{
                width: "33.3%",
                maxWidth: "100px",
              }}
            >
              <a
                style={{
                  width: "100%",
                }}
                href="/"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div
          style={{
            alignItems: "center",
            gap: "85px",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            right: "100%",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "150px",
              background: "#eeeff4",
            }}
          />
          <span
            style={{
              transform: "rotate(90deg)",
              color: "#eeeff4",
              fontSize: "1rem",
              fontWeight: "500",
              letterSpacing: ".7rem",
            }}
          >
            HOME
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
