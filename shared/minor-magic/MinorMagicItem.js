import React from 'react';

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
            fontWeight: 'normal'
        };

        return (
            <div style={this.props.style}>
                <div><h2 style={headerStyle}>{this.state.prefix} {this.state.name} {this.state.suffix}</h2></div>

                <div>
                    <p>{this.state.firstDescription}</p>
                    <p>{this.state.secondDescription}</p>
                </div>
            </div>
        )
    }
}