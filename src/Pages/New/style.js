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

    .note-wrapper{
        display: flex;
        flex-wrap: wrap;
        gap:2.4rem;

        background-color: ${({theme}) => theme.COLORS.BACKGROUND_MAX};
        
        border-radius: .8rem;
        
        height: 8.8rem;
        
        padding: 1.6rem;
        margin-bottom: 4rem;
    }

    .button-wrapper{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2.4rem;
        
        border-radius: .8rem;

        height: 8.8rem;
    }

    .delete-content{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_MAX};
        color: ${({theme}) => theme.COLORS.TEXT_PINK};
    }
`

export const Content = styled.div`
    margin: 4rem auto 0;
    width: 113.7rem;
`

export const Form = styled.form `
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
       
        font-size: 3.6rem;
        font-weight: 500;
    }

    > :nth-child(3){
        margin-block: 4rem;

        display: grid;
        grid-template-columns: repeat(2, 53.6rem) ;
        gap: 4rem;

        div:nth-child(3){
            width: 111.3rem;
            height: 27.4rem;
        }
    }

    > h2{
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_2};
        font-size: 2rem;

        margin-bottom: 2.4rem;
    }


`

