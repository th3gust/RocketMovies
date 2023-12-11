import styled from "styled-components";

export const Container = styled.div`
    > header {
        width: 100%;
        height: 14.4rem;

        background: ${({theme}) => theme.COLORS.BACKGROUND_MEDIUM};

        display: flex;
        align-items: center;
        
        padding-left: 16.8rem;
    }
`

export const Avatar = styled.div`
    position: relative;

    width: 18.6rem;
    height: 18.6rem;

    margin: -9rem auto 0;

    > img{
        width: 18.6rem;
        height: 18.6rem;

        border-radius: 50%;
    }

    >label {
        width: 4.8rem;
        height: 4.8rem;
        color: black;

        background: ${({theme}) => theme.COLORS.TEXT_PINK};
        
        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        right: .7rem;
        bottom: .7rem;

        cursor: pointer;

        input{
            display: none;
        }

    }



`

export const Form = styled.form `
    width: 34rem;

    margin: 6.4rem auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;

    > div:nth-child(3),button {
        margin-top: 2.4rem;
    }

`