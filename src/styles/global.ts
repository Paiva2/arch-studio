import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap");

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: Spartan, sans-serif;
 }

 a {
  all: inherit;
 }

 p {
   margin: 0;
 }
`

export default GlobalStyle
