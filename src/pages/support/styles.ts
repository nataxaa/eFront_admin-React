import styled from "styled-components";

export const Container = styled.div`
    padding: 50px 4rem;
    
    h2{
        margin-bottom: 20px;
    }
`

export const Faq = styled.div`
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 20px;

    div{
        display: flex;
        flex-direction: column;
    }
    div.area-questions{
        display: flex;
        flex-direction: column;
        p{
            font-weight: bold;
        }
    }

`

export const Email = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    button{
        color: #FFFFFF;
        background-color: var(--purple-color);
        border-radius: 6px;
        padding: 10px 15px;
        border: none;
    }
    :hover{
        transition: 0.2s;
        opacity: 0.8;
        cursor: pointer;
    }
    input{
        background-color: #FFFFFF;
        border-radius: 6px;
        font-size: 15px;
        border: none;
        padding: 12px 10px;
    }
    input.big{
        height: 10rem;
    }
`