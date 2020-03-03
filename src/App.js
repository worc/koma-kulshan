import '@babel/polyfill'
import React from "react";
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

export default () => (
  <React.Fragment>
    <Header />
    <Sidebar />
    <Main/>
  </React.Fragment>
)
