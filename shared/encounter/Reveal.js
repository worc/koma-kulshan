import React from 'react';
import Confuse from '../../util/Confuse';

const leadInStyle = {
    fontFamily: '"Rammetto One", cursive'
};

const revealStyle = {
    textAlign: 'right'
};

export default class Reveal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reveal: ''
        }
    }

    listener(message) {
        this.setState({ reveal: message });
    }

    componentWillReceiveProps(nextProps) {
        const confuser = new Confuse(this.listener.bind(this), nextProps.reveal, {
            // todo let Confuse handle arrays of characters
            characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"].join(''),
            exclude: '. ',
            speed: 50
        });

        confuser.loop().resolve(1500, 500);
    }

    render() {
        return (
            <div>
                <div style={ leadInStyle }>{ this.props.leadIn }...</div>
                <div style={ revealStyle }>...{ this.state.reveal }</div>
            </div>
        )
    }
}
