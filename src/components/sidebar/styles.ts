import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-color: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 15px;
    background-color: #FFFFFF;
    h2{
        margin-bottom: 40px;
        font-size: 25px;
        span{
            color: #9E6EFE;
        }
    }
    .links{
        color:#000000;
        text-decoration: none;  
    }

`

export const ListPages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #F2F6FF;
    margin-bottom: 20px;
    p{
        padding: 15px 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 6px;
        cursor: pointer;
    }
    :hover{
        background-color: #9E6EFE0F;
        color: #9E6EFE;
    }


`

export const FooterSideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        cursor: pointer;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    :hover{
        background-color: #9E6EFE0F;
        color: #9E6EFE;
    }

`