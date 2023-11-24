import styled from "styled-components";

export const Container = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        span{
            font-size: 20px;
            color: var(--span-color)
        }
        div.area-title-text{
            display: flex;
            flex-direction: column;
            align-items: start;
        }
        div.area-icons{
            display: flex;
            align-items: center;
            gap:10px;
            font-size: 20px;
        }
`