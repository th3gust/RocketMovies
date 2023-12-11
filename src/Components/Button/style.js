import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: 100%;
    
    background-color: ${({theme}) => theme.COLORS.TEXT_PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_HEAVY};

    height: 5.6rem;
    
    border: 0;
    border-radius: .8rem;

    padding: 1.6rem;

    margin-top: 1.6rem;

    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: space-around;

    &:disabled{
        opacity: 0.5;
    }

    
`