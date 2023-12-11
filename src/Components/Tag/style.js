import styled from "styled-components"

export const Container = styled.span`
    height: 3rem;

    display: inline-block;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_ZERO};

    border-radius: .8rem;

    color: ${({theme}) => theme.COLORS.TEXT_WHITE};

    padding: 1.6rem;
   
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;

`