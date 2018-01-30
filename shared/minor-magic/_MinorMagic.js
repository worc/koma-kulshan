import React from 'react';

import MinorMagicList from './_MinorMagicList';

import armors from '../../things/armors.mjs';
import items from '../../things/items.mjs';
import { weaponsFlatList } from '../../things/weapons.mjs';

import minorMagicArmorProps from '../../properties/minor-magic-armor-properties.mjs';
import minorMagicItemProps from '../../properties/minor-magic-item-properties.mjs';
import minorMagicWeaponProps from '../../properties/minor-magic-weapon-properties.mjs';

export default ({ match }) => {
    switch (match.params.type) {
        case 'armor':
            return MinorMagicList(armors, minorMagicArmorProps);
        case 'item':
            let wellStructuredItems = items.map(item => { return { name: item }; });
            return MinorMagicList(wellStructuredItems, minorMagicItemProps);
        case 'weapon':
            return MinorMagicList(weaponsFlatList, minorMagicWeaponProps);
        default:
            console.error('todo, 404 not found');
            return (<div>404 not found</div>);
    }
}
