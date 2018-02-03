import Confuse from './Confuse.mjs';

let starter = 'some kind of text';

let confuser = new Confuse((message) => { console.log(message)}, starter, {
    characters: ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"].join(''),
    // startBaffled: false
    startBaffled: false
});

// let confuser = new Confuse(() => {}, 'some kind of text');

// confuser.loop().pause(2000);

// confuser.grow();

// confuser.decay();

confuser.loop();

// confuser.resolve(2500, 100);