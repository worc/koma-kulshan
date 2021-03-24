import React from 'react';

import descriptions from './descriptions'
import shuffle from '../util/shuffle';

export default () => {
    shuffle(descriptions);
    let list = descriptions.slice(0, 12);

    return (
        <ul>
            {
                list.map( (description, index) => {
                    return (<li key={ index }>{ description }</li>)
                })
            }
        </ul>
    )
}
