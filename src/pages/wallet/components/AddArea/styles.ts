import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFFFFF;
    padding: 30px 30px;
    border-radius: 6px;
    .area-form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 1rem;
        
    }
    input.input-form{
        padding: 10px 10px;
        border-radius: 6px;
        background-color: var(--purple-color);
        color: #FFFFFF;
        border: none;
    }
`