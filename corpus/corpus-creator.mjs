// creates an ~40 megabyte json array

import fs from 'fs';

import weaponProp from '../properties/minor-magic-weapon-properties.mjs';
import weapons from '../things/weapons.mjs';

const weaponList = [].concat(weapons.melee.simple).concat(weapons.melee.martial).concat(weapons.ranged.simple).concat(weapons.ranged.martial);

let corpusList = [];

weaponList.forEach(weapon => {
    let prefixes = JSON.parse(JSON.stringify(weaponProp));
    let suffixes = JSON.parse(JSON.stringify(weaponProp));

    console.log(`working on ${weapon.name}`);

    prefixes.forEach(prefix => {
        suffixes.forEach(suffix => {
            if(prefix.description !== suffix.description) {
                corpusList.push(`${prefix.prefix} ${weapon.name} ${suffix.suffix}`);
            }
        });
    });
});

console.log('writing stream to file');

fs.writeFile('./minor-magic-weapons.json', `${JSON.stringify(corpusList, null, 2)}\n`, 'utf8', error => {
    if(error) {
        console.error(error);
        throw error;
    }
});