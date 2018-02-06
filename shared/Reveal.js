import React from 'react';
import Confuse from '../../util/Confuse';

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
        if (nextProps.reveal !== this.state.reveal){
            const confuser = new Confuse(this.listener.bind(this), nextProps.reveal, {
                // todo let Confuse handle arrays of characters
                characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"].join(''),
                exclude: '. ',
                speed: 50
            });

            confuser.loop().resolve(500, 500);
        }
    }

    render() {
        return (
            <div style={{ ...revealStyle, ...this.props.style }}>{ this.state.reveal }</div>
        )
    }
}
