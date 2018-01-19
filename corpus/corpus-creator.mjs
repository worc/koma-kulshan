// creates an ~40 megabyte json array

import fs from 'fs';

import armorProps from '../properties/minor-magic-armor-properties.mjs';
import itemProps from '../properties/minor-magic-item-properties.mjs';
import weaponProps from '../properties/minor-magic-weapon-properties.mjs';

import armors from '../things/armors.mjs';
import items from '../things/items.mjs';
import { weapons } from '../things/weapons.mjs';

const weaponList = [].concat(weapons.melee.simple).concat(weapons.melee.martial).concat(weapons.ranged.simple).concat(weapons.ranged.martial);

let armorCorpusList = [];
let itemCorpusList = [];
let weaponCorpusList = [];


weaponList.forEach(weapon => {
    let prefixes = JSON.parse(JSON.stringify(weaponProps));
    let suffixes = JSON.parse(JSON.stringify(weaponProps));

    console.log(`working on ${weapon.name}`);

    prefixes.forEach(prefix => {
        suffixes.forEach(suffix => {
            if(prefix.description !== suffix.description) {
                weaponCorpusList.push(`${prefix.prefix} ${weapon.name} ${suffix.suffix}`);
            }
        });
    });
});

function writeToFile(type, list) {
    console.log(`writing ${type} corpus to file`);
    fs.writeFile(`./minor-magic-${type}.json`, `${JSON.stringify(list, null, 2)}\n`, 'utf8', error => {
        if(error) {
            console.error(error);
            throw error;
        }
    });
}

writeToFile('weapons', weaponList);
