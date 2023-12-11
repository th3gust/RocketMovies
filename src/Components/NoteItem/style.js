import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew? "transparent" : theme.COLORS.BACKGROUND_EASY};
    color:${({theme, isNew}) => isNew? theme.COLORS.TEXT_WHITE : theme.COLORS.TEXT_GRAY_2};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.TEXT_GRAY_2}` : "none"};

    margin-bottom: .8rem;
    border-radius: 1rem;
    padding-right: 1.6rem;

    > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;

        color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
        background: transparent;

        border: none;

        &::placeholder {
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_2};
        }
    }

    > button {
        border: none;
        
        background: none;

        color: ${({ theme }) => theme.COLORS.TEXT_PINK};
    }

`

