import Confuse from './Confuse.mjs';

let starter = 'some kind of text';

let confuser = new Confuse((message) => { console.log(message)}, starter);

confuser.loop();

confuser.resolve(2500, 100);