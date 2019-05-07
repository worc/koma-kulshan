import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import App from './shared/App'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: "Lato", sans-serif;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  #app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    margin: 0;
    padding: 0 8px;
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
