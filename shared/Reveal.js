import React from 'react';
import Confuse from '../util/Confuse';

export default class Reveal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reveal: ''
        };

        this.confuser = new Confuse(this.listener.bind(this), this.props.reveal, {
            // todo let Confuse handle arrays of characters
            characters: [
                '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎', // U+258x
                '▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟', // U+259x
            ].join(''),
            exclude: '. ',
            speed: 50
        });
    }

    listener(message) {
        this.setState({ reveal: message });
    }

    componentWillReceiveProps(nextProps) {
        this.confuser.setResolution(nextProps.reveal);

        if (nextProps.reveal !== this.state.reveal) {
            this.confuser.loop(750).resolve(750);
        }
    }

    render() {
        return (
            <span style={{ ...this.props.style }}>{ this.state.reveal }</span>
        )
    }
}
