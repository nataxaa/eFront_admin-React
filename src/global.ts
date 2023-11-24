import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
      --purple-color: #9E6EFE;
      --white-color: #FFFFF;
      --black-color: #2D3748;
      --gray-color: #F9F9F9;
      --span-color: #E0E0E0;
    }

    *{
      margin:0;
      padding:0;
    }
    body{
      min-height: 100vh;
      max-width: 100%;
      overflow-x: hidden;
      font-family: 'Roboto Condensed', sans-serif;
    }  

`
export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;

`