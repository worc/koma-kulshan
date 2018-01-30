import React from 'react';

export default class MinorMagicItem extends React.Component {
    render() {
        return (
            <div>
                <div><h2>{this.props.prefix} {this.props.name} {this.props.suffix}</h2></div>

                <div>
                    <p>{this.props.firstDescription}</p>
                    <p>{this.props.secondDescription}</p>
                </div>
            </div>
        )
    }
}