import styled from "styled-components";

interface StyledCard{
    background?:string;
    color?:string
}

export const Container = styled.div<StyledCard>`
    background-color: #FFFFFF;
    padding: 30px 0;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 20px;
    }
    span{
        color: ${({color})=> color ? color : "#FFF"};
    }


`