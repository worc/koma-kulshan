import React from 'react';

import { getFromShuffled } from "../util/Generators";

const headers = [
    'thunder rolling to higher mountainsides',
    'where even the fish are too wet',
    'those nearby highlands',
    'near the loud and dangerous mountain',
    'the birds here do not shut up',
    'this river really loves driftwood',
    'not a bad place to stay the night',
    'they will actually make you food in the morning',
    'goat snare (this kills the goat)',
    'meet here to check out the mountain view',
    'you will feel a lot better swimming here',
    'by and by... it is what it is... so it goes... ',
    'not a good place to fall into the water'
];

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.headerGenerator = getFromShuffled(headers);

        this.state = {
            headline: ''
        };

        this.style = {
            fontSize: '0.8rem',
            fontVariantCaps: 'all-small-caps',
            letterSpacing: '0.1rem',
            padding: '1px 10px',
            textAlign: 'justify',
        };

        // this takes the place of an :after pseudo class that would trigger
        // text-align: justify to work correctly

        // after content to trigger justify:
        // https://stackoverflow.com/a/43728929/769780

        // pseudo classes in react:
        // https://stackoverflow.com/questions/28269669/css-pseudo-elements-in-react
        this.hackStyle = {
            display: 'inline-block',
            width: '100%'
        }
    }

    componentDidMount() {
        this.setState({ headline: this.headerGenerator.next().value });
    }


    render() {
        return (
            <header style={ this.style }>
                <div>
                    { this.state.headline }
                    <div style={ this.hackStyle } />
                </div>
            </header>
        )
    }

}