import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 11.6rem;
    width: 100%;

    border-bottom: .1rem solid ${({theme}) => theme.COLORS.TEXT_GRAY_2};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6.4rem;

    padding: 0 12.3rem;

    h1 {
        color: ${({theme}) => theme.COLORS.TEXT_PINK};
        
        font-size: 2.4rem;
        font-weight: 700;

        align-self: center;
    }
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: .9rem;
    
    > img {
        width: 6.4rem;
        height: 6.4rem;

        border-radius: 50%;
        border: .1rem solid ${({theme}) => theme.COLORS.TEXT_GRAY_2};
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;

        width: 12.5rem;

        strong{
            color: ${({theme}) => theme.COLORS.TEXT_WHITE};
            font-size: 1.4rem;
            font-weight: 700;
        }

        button{
            background: transparent;
            
            border: none;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_2};

            font-size: 1.4rem;
            font-weight: 400;
        }
    }
`