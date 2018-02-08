import React from 'react';

import Reveal from "../Reveal";

export default class MinorMagicItem extends React.Component {
    constructor(props) {
        super();
        this.state = { ...props };
    }

    componentWillReceiveProps(props) {
        this.setState({ ...props });
    }

    render() {
        let headerStyle = {
            fontFamily: '"Rammetto One", cursive',
            fontSize: '1.4rem',
            fontWeight: 'normal',
            margin: '0'
        };

        return (
            <div style={ this.props.style }>
                <div><h2 style={ headerStyle }>
                    <Reveal reveal={ this.state.prefix } /><span> </span>
                    <Reveal reveal={ this.state.name } /><span> </span>
                    <Reveal reveal={ this.state.suffix } />
                </h2></div>

                <div>
                    <p><Reveal reveal={ this.state.firstDescription }/></p>
                    <p><Reveal reveal={ this.state.secondDescription }/></p>
                </div>
            </div>
        )
    }
}