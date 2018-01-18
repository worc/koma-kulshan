import express from "express";

import encountersRouter from './routes/encounters.mjs';

import trinkets from './trinkets.mjs';
import armors from './properties/minor-magic-armor-properties.mjs';
import items from './properties/minor-magic-item-properties.mjs';
import weapons from './properties/minor-magic-weapon-properties.mjs';

import shuffle from './shuffle.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send(`
        <a href="/minor-magic">minor magic</a>
        <a href="/trinkets">trinkets</a>
        <a href="/encounters">encounters</a>
    `);
});

app.get("/trinkets", (req, res) => {
    let trinketList = `<ul>`;

    shuffle(trinkets);

    for(let i = 0; i < 7; i++ ) {
        let trinket = trinkets.pop();
        trinketList += `<li>${trinket}</li>`;
    }

    trinketList += '</ul>';

    res.status(200).send(`
        ${trinketList}
    `);
});

app.get('/minor-magic', (req, res) => {
    res.status(200).send(`
        <a href="/minor-magic/armor">armor</a>
        <a href="/minor-magic/weapon">weapon</a>
        <a href="/minor-magic/item">item</a>
    `);
});

app.get('/minor-magic/:type', (req, res) => {
    let propertyList = (req.params.type === 'armor') ? armors : (req.params.type === 'weapon') ? weapons : items;

    let list = `<ul>`;

    shuffle(armors);
    shuffle(items);
    shuffle(weapons);

    for(let i = 0; i < 7; i++ ) {
        let firstProperty = propertyList.pop();
        let secondProperty = propertyList.pop();

        list += `<li>${firstProperty.prefix} ${req.params.type.toUpperCase()} ${secondProperty.suffix}</li>`;
    }


    list += '</ul>';

    res.status(200).send(`
        ${list}
    `)
});

app.use('/encounters', encountersRouter);

app.listen(PORT, () => {
    console.log("Server listening on", PORT);
});
