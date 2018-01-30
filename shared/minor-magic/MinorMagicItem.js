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
        return (
            <div>
                <div><h2>{this.state.prefix} {this.state.name} {this.state.suffix}</h2></div>

                <div>
                    <p>{this.state.firstDescription}</p>
                    <p>{this.state.secondDescription}</p>
                </div>
            </div>
        )
    }
}