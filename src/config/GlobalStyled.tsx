import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #4e4e4e;
    }
`;

export default GlobalStyled;