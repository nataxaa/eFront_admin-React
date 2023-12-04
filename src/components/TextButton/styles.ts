import styled, { keyframes } from "styled-components";

interface StyleButton{
    background?: string;
    color?:string;
}


export const Container = styled.button<StyleButton>`

    background-color: ${({background})=> background ? background : '#9E6EFE'};
    color: ${({color})=>color ? color : '#FFF'};
    padding: 10px 10px;
    border-radius: 6px;
    font-size: 14px;
    border: none;
    cursor: pointer;
    width: fit-content;
    &:hover{
        transition: 0.2s;
        opacity: 0.8;
    }
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  svg {
    animation: ${rotate} 1.2s ease-in-out infinite;
  }
`;