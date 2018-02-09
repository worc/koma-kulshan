import React from 'react';

import Reveal from "../Reveal";
import TapToReveal from "../TapToReveal";

export default class MinorMagicItem extends React.Component {
    constructor(props) {
        super();
        this.state = { ...props };
    }

    componentWillReceiveProps(props) {
        this.setState({ ...props });
    }

    render() {
        const headerStyle = {
            fontFamily: '"Rammetto One", cursive',
            fontSize: '1.4rem',
            fontWeight: 'normal',
            margin: '0'
        };

        const revealStyle = {
            fontFamily: '"Menlo", "DejaVu Sans Mono", monospace'
        };

        return (
            <div style={ this.props.style }>
                <div><h2 style={ headerStyle }>
                    <Reveal reveal={ this.state.prefix } /><span> </span>
                    <Reveal reveal={ this.state.name } /><span> </span>
                    <Reveal reveal={ this.state.suffix } />
                </h2></div>

                <div>
                    <p><TapToReveal style={ revealStyle } reveal={ this.state.firstDescription }/></p>
                    <p><TapToReveal style={ revealStyle } reveal={ this.state.secondDescription }/></p>
                </div>
            </div>
        )
    }
}