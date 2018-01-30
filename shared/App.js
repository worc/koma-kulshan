import React from "react";

import Sidebar from './Sidebar';
import Main from './Main';

class App extends React.Component{
    render() {
        return (
            <div>
                <Sidebar />
                <Main />
            </div>
        )
    }
}

export default App;
