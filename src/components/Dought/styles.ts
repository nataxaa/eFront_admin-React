import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    background-color: #FFF;
    padding: 20px 30px;
    border-radius: 6px;

    div.area-graphic{
        position: relative;
    }
    
    
    div.subtitle{
        display:'flex';
        flex-direction:'column';
        margin-top:'20px';
        gap:'10px';
    }
    p.id{
        display:'flex'; 
        align-items:'center'; 
        gap:'5px';
        justify-content: space-between;
    }


`