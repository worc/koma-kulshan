import React from 'react';

import trinkets from '../trinkets.mjs';
import shuffle from '../shuffle.mjs';

export default () => {
    shuffle(trinkets);
    let list = trinkets.slice(0, 7);

    return (
        <ul>
            {
                list.map( (trinket, index) => {
                    return (<li key={ index }>{ trinket }</li>)
                })
            }
        </ul>
    )
}