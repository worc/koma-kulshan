// uh... creates about a 600 megabytes of json array

import fs from 'fs';
import jsonStream from 'JSONStream';

import weaponProp from '../minor-magic-weapon-properties.mjs';
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

// stringify() is a default streamer for arrays
// const streamer = jsonStream.stringify('[\n  ', ',\n  ', '\n]\n');
// streamer.pipe(fs.createWriteStream('./minor-magic-weapons.json'));
// corpusList.forEach(item => {
//     streamer.write(item);
// });
// streamer.end();

fs.writeFile('./minor-magic-weapons.json', `${JSON.stringify(corpusList, null, 2)}\n`, 'utf8', error => {
    if(error) {
        console.error(error);
        throw error;
    }
});