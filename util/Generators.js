import shuffle from "../shuffle.mjs";

function *getFromShuffled(list) {
    let index = 0;
    shuffle(list);

    while (list) {
        if (index >= list.length) {
            shuffle(list);
            index = 0;
        }

        yield list[index++];
    }
}

function *drainFromShuffled(list) {
    shuffle(list);

    while(list.length > 0) {
        yield list.pop();
    }
}

export { getFromShuffled, drainFromShuffled }
