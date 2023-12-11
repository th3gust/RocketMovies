import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    body{        
        background: ${({theme}) => theme.COLORS.BACKGROUND_HEAVY};
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
    }

    body, input, button, textarea{
        font-family: "Roboto Slab", sans-serif;
        
        outline: none;

        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter .2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9)
    }
`
