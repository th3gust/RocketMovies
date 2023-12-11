import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 22.2rem;

    padding: 3.2rem;
    margin-bottom: 2.4rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    background: ${({theme}) => theme.COLORS.BACKGROUND_MEDIUM};

    border: none;
    border-radius: 1.6rem;

    > h1 {
        margin-bottom: -.8rem;

        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
    }

    > p {
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_2};
        
        text-align: justify;
        
        overflow: hidden;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    >footer{
        display: flex;
        gap: .8rem;
    }

`