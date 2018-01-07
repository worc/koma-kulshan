import express from "express";

import trinkets from './trinkets.mjs';
import shuffle from './shuffle.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
    console.log("Server listening on", PORT);
});
