import styled from "styled-components";

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
    grid-area: content;

    width: 111.3rem;

    margin: 4rem auto;

    padding-bottom: 15.6rem;
    
    
    > div{
        margin-top: 2.4rem;
        margin-bottom: 4rem;
        display: flex;
        align-items: center;
        gap: 1.9rem;

        span {
            display: flex;
            align-items: center;
            gap: .8rem;

            color: ${({theme}) => theme.COLORS.TEXT_WHITE};

            font-family: "Roboto", sans-serif;
            font-size: 1.6rem;
            font-weight: 400;
        }
    }

    img {
        width: 1.6rem;
        height: 1.6rem;

        border-radius: 50%;
    }

    > p {
        text-align: justify;
        font-size: 1.6rem;
        
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
    }
`