import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import App from './shared/App'

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    font-family: "Lato", sans-serif;
    padding: 0 10px;
  }
`

render(
  <React.Fragment>
    <GlobalStyle/>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.Fragment>
, document.getElementById('app'))
