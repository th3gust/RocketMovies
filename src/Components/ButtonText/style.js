import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`

    a {
        button {
        background: none;

        border: none;

        color: ${({theme}) => theme.COLORS.TEXT_PINK};

        display: flex;
        align-items: center;
        gap: .8rem;
        }
    }

`
