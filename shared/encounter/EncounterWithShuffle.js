import React from 'react';
import d20 from '../../util/d20';

import { getFromShuffled } from "../../util/Generators";
import { directions, motivations, spottingD2 } from "../../encounters/Circumstances";

import Reveal from './Reveal';
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

        console.log(event.target.textContent);

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
                debugger;
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
        return (
            <div style={{ display: 'flex', flex: '1 0 auto', flexFlow: 'column' }}>
                <div style={{ flex: '1 0 auto' }}>
                    <Reveal leadIn={`There's something out there, its **direction** seems to be`} reveal={ `${this.state.direction} the party`}/>
                    <Reveal leadIn={`At first **glance** it seems that there's`} reveal={ this.state.general } />
                    <Reveal leadIn={`It seems that ${ this.state.general }`} reveal={ this.state.spotting } />
                    <Reveal leadIn={`As they approach, the party sees that ${ this.state.general } is **specifc**ly`} reveal={ this.state.specific } />
                    <Reveal leadIn={`Its **motivation** seems to be to`} reveal={ this.state.motivation } />
                </div>

                <Reshuffle
                    reshuffleHandler={ this.reshuffleHandler.bind(this) }
                    subShuffles={['direction', 'general', 'spotting', 'specific', 'motivation']}
                />
            </div>
        )
    }
}
