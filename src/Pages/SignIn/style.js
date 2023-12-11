import styled from "styled-components"
import BackgroundImg from "../../assets/background.png"

export const Container = styled.div`
    display: grid;

    grid-template-columns: 63.7rem auto;

    height: 100vh;

`

export const Form = styled.form `
    width: 34.2rem;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        color: ${({theme}) => theme.COLORS.TEXT_PINK};
       
        font-size: 4.8rem;
        font-weight: 700;
    }

    > p {
        color: ${({theme}) => theme.COLORS.TEXT_GRAY};

        font-size: 1.4rem;
        font-weight: 400;
    }

    > h2 {
        margin-block: 4.8rem;
    } 

    > div{
        margin-bottom: .8rem;
    }

    > :nth-child(7){
        margin: 0 auto;
    }

    > button {
        margin-bottom: 4.2rem;
    }

`

export const Background = styled.div `
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;
    
    opacity: 0.4;

`