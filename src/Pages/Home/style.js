import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main{
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: .8rem; 
        }
        &::-webkit-scrollbar-track {
            background: transparent
        }

        &::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLORS.TEXT_PINK}
        }
    }

`

export const Content = styled.div`
    max-width: 112.1rem;

    margin: 5rem auto;

    > span {
        margin-bottom: 5rem;

        display: grid;
        grid-template-columns: 20rem 20.7rem;
        gap: 70.6rem;
        
        align-items: center;

        h1 {
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};

        font-size: 3.2rem;
        font-weight: 400;    
        }

    }

`