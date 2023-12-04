import styled from "styled-components";

export const Container = styled.div`
    padding: 50px 4rem;



`

export const BodyTransaction = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
`

export const AreaCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

`

export const AddArea = styled.div`
    background-color: #FFFFFF;
    border-radius: 6px;
    padding: 20px 20px;
    div{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
    }
    button{
        background-color: var(--purple-color);
        color: #FFFFFF;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        padding: 10px 15px;
        position: relative;
        bottom: -3rem;
    }
    :hover{
        opacity: 0.8;
        transition: 0.2s;
    }
`