import express from 'express';
// import d20 from 'd20';

import shuffle from '../shuffle.mjs';

import armors from '../things/armors.mjs';
import items from '../things/items.mjs';
import { weaponsFlatList } from '../things/weapons.mjs';

import minorMagicArmorProps from '../properties/minor-magic-armor-properties.mjs';
import minorMagicItemProps from '../properties/minor-magic-item-properties.mjs';
import minorMagicWeaponProps from '../properties/minor-magic-weapon-properties.mjs';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send(`
    <ul>
        <li><a href="/minor-magic/armor">armor</a></li>
        <li><a href="/minor-magic/weapon">weapon</a></li>
        <li><a href="/minor-magic/item">item</a></li>
    </ul>
    `);
});

router.get('/:type', (req, res) => {
    console.log(req.params);

    if(req.params.type === 'weapon') {
        res.status(200).send(`${ minorMagicWeaponsList() }`);
    } else if (req.params.type === 'armor') {
        res.status(200).send(`${ minorMagicArmorsList() }`);
    }
});

function minorMagicArmorsList(number = 7) {
    return minorMagicList(armors, minorMagicArmorProps, number)
}

function minorMagicWeaponsList(number = 7) {
    return minorMagicList(weaponsFlatList, minorMagicWeaponProps, number);
}

function minorMagicList(objects, props, number) {
    let list = `<ul>`;

    // todo, this feels clunky, but i mean, it works for a deep copy for now
    let localObjects = shuffle(JSON.parse(JSON.stringify(objects)));
    let localProps = shuffle(JSON.parse(JSON.stringify(props)));

    for(let i = 0; i < number; i++) {
        if(localProps.length < 2) {
            localProps = shuffle(JSON.parse(JSON.stringify(props)));
        }

        if(localObjects.length === 0) {
            localObjects = shuffle(JSON.parse(JSON.stringify(objects)));
        }

        let firstProp = localProps.pop();
        let secondProp = localProps.pop();
        let localObject = localObjects.pop();

        list += `
            <li>
                <div><h2>${firstProp.prefix} ${localObject.name} ${secondProp.suffix}</h2></div>
                <div>
                    <p>${firstProp.description}</p>
                    <p>${secondProp.description}</p>
                </div>
            </li>
        `;
    }

    list += `</ul>`;

    return list;
}

export default router;
