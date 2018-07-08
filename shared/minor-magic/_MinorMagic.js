import React from 'react';
import { URLSearchParams } from 'url'

import MinorMagicItemWithShuffle from './MinorMagicItemWithShuffle';

import armors from '../../things/armors.mjs';
import items from '../../things/items.mjs';
import { weaponsFlatList } from '../../things/weapons.mjs';

import minorMagicArmorProps from '../../properties/minor-magic-armor-properties.mjs';
import minorMagicItemProps from '../../properties/minor-magic-item-properties.mjs';
import minorMagicWeaponProps from '../../properties/minor-magic-weapon-properties.mjs';

export default ({ match, location }) => {
    let search = new URLSearchParams(location.search);

    switch (match.params.type) {
        case 'armor':
            return ( <MinorMagicItemWithShuffle search={ search } objects={ armors } properties={ minorMagicArmorProps }/> );
        case 'item':
            let wellStructuredItems = items.map(item => { return { name: item }; });
            return ( <MinorMagicItemWithShuffle search={ search } objects={ wellStructuredItems } properties={ minorMagicItemProps } />);
        case 'weapon':
            return ( <MinorMagicItemWithShuffle search={ search } objects={ weaponsFlatList } properties={ minorMagicWeaponProps } />);
        default:
            console.error('wait what? top-level should be root for this route, but unfound second level can 404');
            return (<div></div>);
    }
}
