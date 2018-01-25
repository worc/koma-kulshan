import React from "react";
// import { Switch, Route } from "react-router-dom";

// import Glyphtionary from "../shared/components/Glyphtionary";
// import GlyphSequence from "../shared/components/GlyphSequence";

class App extends React.Component{
    render() {
        return (
            <div>
                <div>hello world</div>
                <div>{ this.props.host }</div>
            </div>
        )
    }
}

export default App;
