import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
}
body{
    background-color: ${(props) => props.theme["base-background"]};
    color:${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
    font: 400 1rem Nunito, sans-serif;
}
button, a {
   cursor: pointer;

   &:disable{
    cursor: not-allowed;
   }
}

html{
@media(max-width:768px){

  font-size: 85%;
}
@media(max-width:334px){

font-size: 80%;
}
}
`;
