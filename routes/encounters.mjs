import express from 'express';
import d20 from 'd20';
// import baffle from 'baffle';

import motivations from '../encounters/motivations.mjs';
import directions from '../encounters/directions.mjs';

import onTheRoad from '../encounters/on-the-road.mjs';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send(`
    <ul>
        <li><a href="/encounters/on-the-road">on the road</a></li>
        <li><a href="/encounters/in-the-desert">in the desert road</a></li>
    </ul>
    `)
});

router.get('/on-the-road', (req, res) => {
    console.log(req);
    let motivationsRoll = d20.roll(8) - 1;
    let firstRoll = d20.roll(12) - 1;
    let secondRoll = d20.roll(12) - 1;

    res.status(200).send(`
        <p>there's something out there, it seems to be... ${directions[d20.roll(6) - 1]} the party</p>
        <p>at first glance it seems that there's... ${onTheRoad[firstRoll].generalDescription}</p>
        <p>they seem to have spotted/not spotted the party</p>
        <p>as they approach, the party sees that ${onTheRoad[firstRoll].generalDescription} is actually... ${onTheRoad[firstRoll].specific[secondRoll]}</p>
        <p>they seem to want to... ${motivations[motivationsRoll]}</p>
    `)
});

export default router;
