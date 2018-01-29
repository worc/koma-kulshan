import React from "react";

import Sidebar from './Sidebar';
import Main from './Main';

// import Glyphtionary from "../shared/components/Glyphtionary";
// import GlyphSequence from "../shared/components/GlyphSequence";

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
