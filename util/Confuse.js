import { getFromShuffled, drainFromShuffled } from './Generators';
import Strategy from './Strategy';

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

export default class Confuse {
    /**
     *
     * @param listener
     * @param resolution
     * @param options
     */

    constructor(
        listener = (message) => { console.warn('no handler given for message:', message) },
        resolution = '',
        {
            characters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?',
            exclude = ' ',
            startBaffled = true,
            speed = 50,
        }
    ) {
        this.options = {
            characters,
            exclude,
            startBaffled,
            speed
        };
        this.listener = listener;
        this.resolution = resolution;
        this.output = resolution;

        this.options.exclude = this.options.exclude.split('');
        this.options.characters = this.options.characters.split('');
        this.characterGenerator = getFromShuffled(this.options.characters);
        this.bitmap = this.resolution.split('').map(() => (this.options.startBaffled) ? 1 : 0 );

        this.render(this.bitmap);

        //todo parameterize:
        this.strategy = Strategy.obfuscateOneBitAndShuffleUntilDone(this.bitmap);
    }

    step() {
        const { value: bitmap, done } = this.strategy.next();

        console.log('done', done);
        console.log('value', bitmap);

        if(done) {
            this.pause();
        }

        this.render(bitmap);
        return this;
    }

    loop(duration, delay = 0) {
        clearInterval(this.interval);
        this.interval = setInterval(() => this.step(), this.options.speed);
        if(duration) {
            setTimeout(() => clearInterval(this.interval), duration);
        }
        return this;
    }

    // todo duration param? store the cleared interval so it can be recovered?
    pause(delay = 0) {
        setTimeout(() => { clearInterval(this.interval); console.log('paused', delay) }, delay);
        return this;
    }

    render(bitmap) {
        // todo refactor to be functional instead of global/side-effect?
        this.bitmap = bitmap;
        this.output = this.bitmap.map((bit, index) => {
            return (bit === 0) ? this.resolution.substring(index, index + 1) : this.characterGenerator.next().value ;
        }).join('');

        this.emit();

        return this;
    }

    emit() {
        this.listener(this.output);
        return this;
    }

    grow(duration = -1) {
        this.strategy = Strategy.obfuscateOneBitAndShuffleUntilDone(this.bitmap);
        this.loop();
        return this;
    }

    decay(duration = -1) {
        this.strategy = Strategy.revealOneBitAndShuffleUntilDone(this.bitmap);
        this.loop();
        return this;

        // this.pause();
        //
        // // todo, if there's extra time, stall with looping
        // // todo, if there's not enough time use a faster pace
        //
        // let cycles = duration / this.options.speed || 1;
        // let splitBaffling = this.output.split('');
        // let splitResolution = this.resolution.split('');
        // let onBitIndices = this.bitmap.map((bit, index) => { if(bit === 1) return index });
        // let indexGenerator = drainFromShuffled(onBitIndices);
        // let pace = onBitIndices.length / cycles;
        //
        // // console.log('length', onBitIndices.length);
        // // console.log('duration', duration);
        // // console.log('cycles', cycles);
        // // console.log('pace', pace);
        //
        // this.interval = setInterval(() => {
        //     let targetIndex = indexGenerator.next().value;
        //
        //     splitBaffling[targetIndex] = splitResolution[targetIndex];
        //     this.bitmap[targetIndex] = 0;
        //     this.output = splitBaffling.join('');
        //     this.listener(this.output);
        //
        //     if(onBitIndices.length === 0) {
        //         this.pause();
        //     }
        // }, 50)
    }

    resolve(duration = 0, delay = 0) {
        setTimeout(() => {
            // this.pause();
            this.decay(duration);
        }, delay);
    }
}
