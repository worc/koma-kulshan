import { getFromShuffled } from './Generators';
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

        // todo parameterize?
        this.strategy = Strategy.obfuscateOneBitAndShuffleForever(this.bitmap);
    }

    step() {
        const { value: bitmap, done } = this.strategy.next();

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
        this.strategy = Strategy.obfuscateOneBitAndShuffleForever(this.bitmap);
        this.loop();
        return this;
    }

    obfuscate() {
        this.strategy = Strategy.obfuscateOneBitAndShuffleForever(this.bitmap);
        this.loop();
        return this;
    }

    resolve(delay = 0) {
        setTimeout(() => {
            clearInterval(this.interval); // todo this.pause()?
            this.strategy = Strategy.revealLeftToRightUntilDone(this.bitmap);
            this.loop();
            return this;
        }, delay);
    }
}
