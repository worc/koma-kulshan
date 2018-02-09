import React from 'react';
import Confuse from '../util/Confuse';

export default class Reveal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reveal: ''
        };
    }

    componentDidMount() {
        this.confuser = new Confuse(message => this.setState({ reveal: message }), this.props.reveal, {
            // todo let Confuse handle arrays of characters
            characters: [
                '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎', // U+258x
                '▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟', // U+259x
            ].join(''),
            exclude: '. ',
            speed: 50
        });
    }

    componentDidUpdate(prevProps) {
        if(prevProps.reveal !== this.props.reveal) {
            this.confuser.setResolution(this.props.reveal);
            this.confuser.loop(750).resolve(750);
        }
    }

    render() {
        return (
            <span style={{ ...this.props.style }}>{ this.state.reveal }</span>
        )
    }
}
