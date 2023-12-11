import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    
    background: ${({theme}) => theme.COLORS.BACKGROUND_EASY};
    
    border-radius: 1rem;

    > input {
        height: 5.6rem;
        width: 100%;
        
        padding: 1.2rem;
        margin-left: 2.4rem;

        background: transparent;
        
        border: none;

        color: ${({theme}) => theme.COLORS.TEXT_WHITE};

        &:placheolder{
            color: ${({theme}) => theme.COLORS.TEXT_TEXT_GRAY_2};
        }

    }

    > svg {
        margin-left: 2.4rem;
    }

    

`