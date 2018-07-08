import React from 'react';

import desertCharacters from '../../encounters/in-the-desert'
import roadCharacters from '../../encounters/on-the-road.mjs';
import EncounterWithShuffle from "./EncounterWithShuffle";

export default ({ match }) => {
    switch (match.params.type) {
        case 'on-the-road':
            return (<EncounterWithShuffle characters={ roadCharacters }/>);
        case 'in-the-desert':
            return (<EncounterWithShuffle characters={ desertCharacters }/>)
        default:
            console.warn('still havent figured out the root route');
            return (<div>hm...</div>)
    }
}
