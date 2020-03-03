import React from 'react';
import MinorMagicItemWithShuffle from './MinorMagicItemWithShuffle';
import armors from './things/armors.js';
import items from './things/items.js';
import { weaponsFlatList } from './things/weapons.js';
import minorMagicArmorProps from './properties/minor-magic-armor-properties.js';
import minorMagicItemProps from './properties/minor-magic-item-properties.js';
import minorMagicWeaponProps from './properties/minor-magic-weapon-properties.js';

const wellStructuredItems = items.map(item => ({ name: item }))

export default ({ match, location }) => {
  const search = new URLSearchParams(location.search);
  const bookmark = {
    prefix: search.get('prefix'),
    name: search.get('name'),
    suffix: search.get('suffix'),
  }

  switch (match.params.type) {
    case 'armor':
      return ( <MinorMagicItemWithShuffle bookmark={ bookmark } objects={ armors } properties={ minorMagicArmorProps }/> );
    case 'item':
      return ( <MinorMagicItemWithShuffle bookmark={ bookmark } objects={ wellStructuredItems } properties={ minorMagicItemProps } />);
    case 'weapon':
      return ( <MinorMagicItemWithShuffle bookmark={ bookmark } objects={ weaponsFlatList } properties={ minorMagicWeaponProps } />);
    default:
      console.error('wait what? top-level should be root for this route, but unfound second level can 404');
      return null
  }
}
