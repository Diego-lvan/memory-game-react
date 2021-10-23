import { createGlobalStyle } from "styled-components";
import Background from "./assets/images/background.jpeg";
const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    overflow: hidden;


}

body{
    box-sizing: border-box;
    background-repeat: repeat;
    font-size: 62.5%;
    font-family: Arial, Helvetica, sans-serif;
    background-image: url(${Background});
    background-size: cover;
}
`;

export default GlobalStyles;
