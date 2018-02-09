import React from 'react';
import Confuse from "../util/Confuse";

export default class TapToReveal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            obfuscate: true,
            reveal: '',
            resolution: ''
        };
    }

    componentDidMount() {
        this.confuser = new Confuse(message => this.setState({ reveal: message }), this.props.reveal, {
            characters: [
                '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎', // U+258x
                '▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟', // U+259x
            ].join(''),
        });
    }

    flip() {
        this.state.obfuscate = !this.state.obfuscate;

        if(this.state.obfuscate) {
            this.confuser.obfuscate(750);
        } else {
            this.confuser.resolve(750);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ resolution: nextProps.reveal });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.resolution !== this.state.resolution) {
            this.state.obfuscate = true;
            this.confuser.setResolution(this.state.resolution, this.state.obfuscate);
            this.confuser.obfuscate(750);
        }
    }

    render() {
        return (
            <span style={{ ...this.props.style }} onClick={ this.flip.bind(this) }>
                { this.state.reveal }
            </span>
        )
    }
}
