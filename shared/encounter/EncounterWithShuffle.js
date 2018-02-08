import React from 'react';
import d20 from '../../util/d20';

import { getFromShuffled } from "../../util/Generators";
import { directions, motivations, spottingD2 } from "../../encounters/Circumstances";

import Reveal from '../Reveal';
import Reshuffle from '../Reshuffle';

export default class EncounterWithShuffle extends React.Component {
    constructor(props) {
        super(props);

        this.directionGenerator = getFromShuffled(directions);
        this.motivationGenerator = getFromShuffled(motivations);
        this.spottingGenerator = getFromShuffled(spottingD2);
        this.characterGenerator = getFromShuffled(props.characters);

        this.state = {
            direction: '',
            motivation: '',
            spotting: '',
            general: '',
            specific: '',
            specifics: []
        }
    }

    newShuffledState() {
        const character = this.characterGenerator.next().value;

        return {
            direction: this.directionGenerator.next().value,
            motivation: this.motivationGenerator.next().value,
            spotting: this.spottingGenerator.next().value,
            general: character.generalDescription,
            specific: character.specific[d20.roll(12) - 1],
            specifics: character.specific
        }
    }

    reshuffleHandler(event) {
        let newState = {};

        switch (event.target.textContent) {
            case 'direction':
                newState = { direction: this.directionGenerator.next().value };
                break;
            case 'general':
                let character = this.characterGenerator.next().value;
                newState = {
                    general: character.generalDescription,
                    specific: character.specific[d20.roll(12) - 1],
                    specifics: character.specific
                };
                break;
            case 'spotting':
                newState = { spotting: this.spottingGenerator.next().value };
                break;
            case 'specific':
                newState = { specific: this.state.specifics[d20.roll(12) - 1]};
                break;
            case 'motivation':
                newState = { motivation: this.motivationGenerator.next().value };
                break;
            case 'reshuffle':
                newState = this.newShuffledState();
                break;
            default:
                console.warn('no handlers matched...')
        }

        this.setState(newState);
    }


    componentDidMount() {
        this.setState(this.newShuffledState());
    }

    componentWillMount() {
        this.setState(this.newShuffledState());
    }

    render() {
        const leadInStyle = {
            fontFamily: '"Rammetto One", cursive'
        };
        
        const revealStyle = {
            textAlign: 'right'
        };

        // todo iterate or factor out Reveal usages here
        return (
            <div style={{ display: 'flex', flex: '1 0 auto', flexFlow: 'column' }}>
                <div style={{ display: 'flex', flex: '1 0 auto', flexFlow: 'column', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div>
                        <div style={ leadInStyle }>There's something out there, its direction seems to be...</div>
                        <div style={ revealStyle }><Reveal reveal={ this.state.direction}/></div>
                    </div>

                    <div>
                        <div style={ leadInStyle }>At first glance it seems that there's...</div>
                        <div style={ revealStyle }><Reveal reveal={ this.state.general } /></div>
                    </div>

                    <div>
                        <div style={ leadInStyle }>It seems that it...</div>
                        <div style={ revealStyle }><Reveal reveal={ this.state.spotting } /></div>
                    </div>

                    <div>
                        <div style={ leadInStyle }>As they approach, the party sees that <Reveal reveal={ this.state.general }/> is specifically...</div>
                        <div style={ revealStyle }><Reveal reveal={ this.state.specific } /></div>
                    </div>`

                    <div>
                        <div style={ leadInStyle }>Its motivation seems to be to...</div>
                        <div style={ revealStyle }><Reveal reveal={ this.state.motivation } /></div>
                    </div>
                </div>

                <Reshuffle
                    reshuffleHandler={ this.reshuffleHandler.bind(this) }
                    subShuffles={['direction', 'general', 'spotting', 'specific', 'motivation']}
                />
            </div>
        )
    }
}
