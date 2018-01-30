import React from "react";

import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends React.Component{
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <Main />
            </div>
        )
    }
}

export default App;
