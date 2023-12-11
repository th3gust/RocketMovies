import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1rem;

    > span{
        
        svg {
            color: ${({theme}) => theme.COLORS.TEXT_PINK};
        }
    }
`