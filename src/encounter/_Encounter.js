import React from 'react';

import desertCharacters from './descriptions/in-the-desert'
import roadCharacters from './descriptions/on-the-road';
import EncounterWithShuffle from "./EncounterWithShuffle";

export default ({ match }) => {
    switch (match.params.type) {
        case 'on-the-road':
            return (<EncounterWithShuffle characters={ roadCharacters }/>);
        case 'in-the-desert':
            return (<EncounterWithShuffle characters={ desertCharacters }/>)
        default:
            return null
    }
}
