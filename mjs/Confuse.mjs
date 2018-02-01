import { getFromShuffled, drainFromShuffled } from './Generators.mjs';

/**
 * Confuse.js
 *
 * A pared-down version of Baffle: a tiny javascript library for obfuscating and revealing text"
 *
 * @author Cam Wiegert <cam@camwiegert.com>
 * @author worc <curtis.s.mcallister@gmail.com>
 *
 * @licence MIT
 */

function obfuscateOne(message = '', bitmap = [], characterGenerator, exclude = []) {
    let workingArray = message.split('');
    let targetIndex = Math.floor(Math.random() * workingArray.length);

    if(bitmap[targetIndex] === 1 && !exclude.includes(workingArray[targetIndex])) {
        workingArray[targetIndex] = characterGenerator.next().value;
    }

    return workingArray.join('');
}

function obfuscateAll(message = '', bitmap = [], characterGenerator, exclude = []) {
    let splitMessage = message.split('');

    return bitmap.map((bit, index) => {
        if(bit === 1 && !exclude.includes(splitMessage[index])) {
            return characterGenerator.next().value;
        } else {
            return splitMessage[index];
        }
    }).join('');
}

export default class Confuse {
    /**
     *
     * @param listener
     * @param resolution
     * @param options
     */
    constructor(listener = (message) => { console.log(message) }, resolution = '', options = {
        characters: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?',
        exclude: ' ',
        startBaffled: true,
        speed: 50,
    }) {
        this.options = { ...options };
        this.listener = listener;
        this.resolution = resolution;
        this.baffling = resolution;

        this.options.exclude = this.options.exclude.split('');
        console.log(this.options.exclude);
        this.options.characters = this.options.characters.split('');
        this.characterGenerator = getFromShuffled(this.options.characters);
        this.bitmap = this.resolution.split('').map(() => (this.options.startBaffled) ? 1 : 0 );

        this.once();
    }

    step() {
        this.baffling = obfuscateOne(this.baffling, this.bitmap, this.characterGenerator, this.options.exclude);
        this.listener(this.baffling);
        return this;
    }

    once() {
        this.baffling = obfuscateAll(this.baffling, this.bitmap, this.characterGenerator, this.options.exclude);
        this.listener(this.baffling);
        return this;
    }

    loop() {
        clearInterval(this.interval);
        this.interval = setInterval(() => this.step(), this.options.speed);
        return this;
    }

    pause() {
        clearInterval(this.interval);
        return this;
    }

    decay(duration = 0) {
        let cycles = duration / this.options.speed || 1;
        let splitBaffling = this.baffling.split('');
        let splitResolution = this.resolution.split('');
        let onBitIndices = this.bitmap.map((bit, index) => { if(bit === 1) return index });
        let indexGenerator = drainFromShuffled(onBitIndices);
        let pace = onBitIndices.length / cycles;

        console.log('length', onBitIndices.length);
        console.log('duration', duration);
        console.log('cycles', cycles);
        console.log('pace', pace);

        this.interval = setInterval(() => {
            let targetIndex = indexGenerator.next().value;

            splitBaffling[targetIndex] = splitResolution[targetIndex];
            this.bitmap[targetIndex] = 0;
            this.baffling = splitBaffling.join('');
            this.listener(this.baffling);

            if(onBitIndices.length === 0) {
                this.pause();
            }
        }, 50)
    }

    resolve(duration = 0, delay = 0) {
        setTimeout(() => {
            console.log('resolving');
            this.pause();
            this.decay(duration);
        }, delay);
    }
}
