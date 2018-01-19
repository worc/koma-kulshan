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
        <li></li><a href="/minor-magic/armor">armor</a></li>
        <li><a href="/minor-magic/weapon">weapon</a></li>
        <li><a href="/minor-magic/item">item</a></li>
    </ul>
    `);
});

router.get('/:type', (req, res) => {
    console.log(req.params);

    if(req.params.type === 'weapon') {
        res.status(200).send(`
            ${ minorMagicWeaponsList() }
        `)
    }
});

// function minorMagicArmorList() {
//     // let
//     return minorMagicList()
// }

function minorMagicWeaponsList(number = 7) {
    return minorMagicList(weaponsFlatList, minorMagicWeaponProps, number);
}

function minorMagicList(objects, props, number) {
    let list = `<ul>`;

    shuffle(objects);
    shuffle(props);

    for(let i = 0; i < number; i++) {
        let firstProp = props.pop();
        let secondProp = props.pop();

        list += `
            <li>
                <div><h2>${firstProp.prefix} ${objects.pop().name} ${secondProp.suffix}</h2></div>
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
