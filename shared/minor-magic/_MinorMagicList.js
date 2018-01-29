import React from 'react';

import shuffle from '../../shuffle.mjs';

export default (objects, properties, number) => {
    let list = [];

    // todo, this feels clunky, but i mean, it works for a deep copy for now
    let localObjects = shuffle(JSON.parse(JSON.stringify(objects)));
    let localProps = shuffle(JSON.parse(JSON.stringify(properties)));

    for(let i = 0; i < number; i++) {
        // todo, also kind of clunky, but it refills the property and object pools if we run low
        if(localProps.length < 2) {
            localProps = shuffle(JSON.parse(JSON.stringify(properties)));
        }

        if(localObjects.length === 0) {
            localObjects = shuffle(JSON.parse(JSON.stringify(objects)));
        }

        let firstProp = localProps.pop();
        let secondProp = localProps.pop();
        let localObject = localObjects.pop();

        list.push({
            prefix: firstProp.prefix,
            suffix: secondProp.suffix,
            name: localObject.name,
            firstDescription: firstProp.description,
            secondDescription: secondProp.description
        });
    }

    return (
        <ul>
            {
                list.map( (item, index) => {
                    return (
                        <li key={index}>
                            <div><h2>${item.prefix} ${item.name} ${item.suffix}</h2></div>
                            <div>
                                <p>${item.firstDescription}</p>
                                <p>${item.secondDescription}</p>
                            </div>
                        </li>
                    )
                } )
            }
        </ul>
    )
}