import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
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
