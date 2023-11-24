import styled from "styled-components";

export const Container = styled.div`

display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
margin-top: 20px;
gap:10px;
`

export const Card = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 20px 10px;
    gap: 10px;
    span{
        background-color: #0BB07B0F;
        color: #0BB07B;
        width: fit-content;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 13px;
        display: flex;
        align-items: center;
        gap: 2px;
    }
    span.receives{
        background-color: #F03D3D0F;
        color: #F03D3D;
        width: fit-content;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 13px;
        display: flex;
        align-items: center;
        gap: 2px;
    }

`