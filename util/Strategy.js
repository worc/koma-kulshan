import shuffle from '../shuffle.mjs';

// todo abstract common elements to higher-order functions
export default class Strategy {
    static *revealLeftToRightUntilDone(bitmap) {
        for(let i = 0; i < bitmap.length - 1; i++) {
            bitmap[i] = 0;
            yield bitmap;
        }

        // todo hm... this could be handled better...
        bitmap[bitmap.length - 1] = 0;
        return bitmap;
    }

    static *revealRightToLeftUntilDone(bitmap) {
        let generator = Strategy.revealLeftToRightUntilDone(bitmap.reverse());
        let value = [], done;

        while(!done) {
            ({ value, done } = { ...generator.next() });
            // todo eeesh, but at least it's cloned this way
            // todo otherwise the shallow copy just fucks everything up
            if(done) {
                return JSON.parse(JSON.stringify(value)).reverse();
            } else {
                yield JSON.parse(JSON.stringify(value)).reverse();
            }
        }
    }

    static *revealOneBitAndShuffleUntilDone(bitmap) {
        let result = [];
        let revealed = 0;
        let obfuscated = 0;

        bitmap.forEach(bit => { if(bit) { obfuscated++ } else { revealed++ } } );

        while(obfuscated > 0) {
            obfuscated--;
            revealed++;
            result = shuffle(Array(revealed).fill(0).concat(Array(obfuscated).fill(1)));

            if(obfuscated === 0) {
                return result;
            } else {
                yield result;
            }
        }
    }

    static *revealOneBitAndShuffleForever(bitmap) {
        let result = [];
        let revealed = 0;
        let obfuscated = 0;

        bitmap.forEach(bit => { if(bit) { obfuscated++ } else { revealed++ } } );

        while(bitmap) {
            if(obfuscated > 0) {
                obfuscated--;
                revealed++;
                result = shuffle(Array(revealed).fill(0).concat(Array(obfuscated).fill(1)))
            }

            yield result;
        }
    }

    static *obfuscateAll(bitmap) {
        yield Array(bitmap.length).fill(1);
    }

    static *obfuscateLeftToRightUntilDone(bitmap) {
        for(let i = 0; i < bitmap.length - 1; i++) {
            bitmap[i] = 1;
            yield bitmap;
        }

        // todo hm... this could be handled better...
        bitmap[bitmap.length - 1] = 1;
        return bitmap;
    }

    static *obfuscateRightToLeftUntilDone(bitmap) {
        let generator = Strategy.obfuscateLeftToRightUntilDone(bitmap.reverse());
        let value = [], done;

        while(!done) {
            ({ value, done } = { ...generator.next() });
            // todo eeesh, but at least it's cloned this way
            // todo otherwise the shallow copy just fucks everything up
            if(done) {
                return JSON.parse(JSON.stringify(value)).reverse();
            } else {
                yield JSON.parse(JSON.stringify(value)).reverse();
            }
        }
    }

    static *obfuscateOneBitAndShuffleForever(bitmap) {
        let result = [];
        let revealed = 0;
        let obfuscated = 0;

        bitmap.forEach(bit => { if(bit) { obfuscated++ } else { revealed++ } } );

        while(bitmap) {
            if(revealed > 0) {
                revealed--;
                obfuscated++;
            }

            result = shuffle(Array(revealed).fill(0).concat(Array(obfuscated).fill(1)))
            yield result;
        }
    }

    static *obfuscateOneBitAndShuffleUntilDone(bitmap) {
        let result = [];
        let revealed = 0;
        let obfuscated = 0;

        bitmap.forEach(bit => { if(bit) { obfuscated++ } else { revealed++ } } );

        while(revealed > 0) {
            revealed--;
            obfuscated++;
            result = shuffle(Array(revealed).fill(0).concat(Array(obfuscated).fill(1)));

            if(revealed === 0) {
                return result;
            } else {
                yield result;
            }
        }
    }
}

// function obfuscateOne(message = '', bitmap = [], characterGenerator, exclude = []) {
//     let workingArray = message.split('');
//     let targetIndex = Math.floor(Math.random() * workingArray.length);
//
//     if(bitmap[targetIndex] === 1 && !exclude.includes(workingArray[targetIndex])) {
//         workingArray[targetIndex] = characterGenerator.next().value;
//     }
//
//     return workingArray.join('');
// }
//
// function obfuscateAll(message = '', bitmap = [], characterGenerator, exclude = []) {
//     let splitMessage = message.split('');
//
//     return bitmap.map((bit, index) => {
//         if(bit === 1 && !exclude.includes(splitMessage[index])) {
//             return characterGenerator.next().value;
//         } else {
//             return splitMessage[index];
//         }
//     }).join('');
// }

// function *bitmapAll(bitmap, value) {
//     while(bitmap) {
//         yield bitmap.fill(value);
//     }
// }
//
// function *obfuscateAllBits(bitmap) {
//     let generator = bitmapAll(bitmap, 1);
//     while(bitmap) {
//         yield generator.next().value
//     }
// }
//
// function *revealAllBits(bitmap) {
//     while(bitmap) {
//         yield bitmapAll(bitmap, 0);
//     }
// }
//
// function *bitmapIterator(bitmap, value) {
//     for(let i = 0; i < bitmap.length; i++) {
//         bitmap[i] = value;
//         yield bitmap;
//     }
// }
