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

export { getFromShuffled }
