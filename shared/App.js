import React from "react";

import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends React.Component{
    render() {
        return (
            <div style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexFlow: 'column nowrap',
                fontFamily: '"Lato", sans-serif',
                height: '100%',
                padding: '0 10px'
            }}>
                <Header />
                <Sidebar />
                <Main style={{
                    display: 'flex',
                    flexFlow: 'column',
                    flex: '1 0 auto'
                }} />
            </div>
        )
    }
}

export default App;
