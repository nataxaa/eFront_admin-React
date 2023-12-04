import styled from "styled-components";

export const Container = styled.table`
background-color: #FFFFFF;
padding: 20px 10px;
border-radius: 6px;
width: 100%;
margin-top: 20px;

h1{
    font-size: 20px;
    margin-bottom: 20px;
}

div.header-table{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 10px;
}
`


export const TableMain = styled.table`

    width: 100%;
    th, td{
        text-align: center;
        padding: 10px 10px 15px;
    }
    td{
        border-bottom: 2px solid #F2F6FF;
    }
`