import React from 'react';

import roadCharacters from '../../encounters/on-the-road.mjs';
import EncounterWithShuffle from "./EncounterWithShuffle";

export default ({ match }) => {
    switch (match.params.type) {
        case 'on-the-road':
            return (<EncounterWithShuffle characters={ roadCharacters }/>);
        default:
            console.warn('still havent figured out the root route');
            return (<div>hm...</div>)
    }
}
