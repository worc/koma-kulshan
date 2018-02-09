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

        this.options.exclude = this.options.exclude.split('');
        this.options.characters = this.options.characters.split('');
        this.characterGenerator = getFromShuffled(this.options.characters);
        this.running = false;
        this.stack = [];

        this.setResolution(resolution).render();
        // todo parameterize?
        // this.strategy =
    }

    setResolution(resolution, obfuscate = this.options.startBaffled) {
        this.resolution = resolution;
        this.bitmap = Array(resolution.length).fill((obfuscate) ? 1 : 0);
        return this;
    }

    queue(speed, strategy, duration, delay) {
        this.stack.push({ speed, strategy, duration, delay });

        if(!this.running) {
            this.runTask(this.stack.shift());
        }

    }

    runTask({ speed, strategy, duration, delay = 0 }) {
        this.running = true;
        clearInterval(this.interval);

        setTimeout(() => {
            this.strategy = strategy(this.bitmap);
            this.interval = setInterval(this.step.bind(this), speed);

            if(duration) {
                setTimeout(() =>  {
                    clearInterval(this.interval);
                    console.log(`this.stack.length ${this.stack.length}`);
                    if(this.stack.length > 0) {
                        this.runTask(this.stack.shift());
                    } else {
                        console.log('duration done, setting this.running to false');
                        this.running = false;
                    }
                }, duration)
            }
        }, delay);
    }

    step() {
        const { value: bitmap, done } = this.strategy.next();

        if(done) {
            this.pause();
        }

        if(bitmap) {
            this.bitmap = bitmap;
        }

        this.render();
        return this;
    }

    loop(duration, pace = this.options.speed) {
        this.queue(pace, Strategy.obfuscateOneBitAndShuffleForever, duration, 0);
        return this;
    }

    // todo duration param? store the cleared interval so it can be recovered?
    pause(delay = 0) {
        setTimeout(() => { clearInterval(this.interval); this.running = false }, delay);
        return this;
    }

    render() {
        const output = this.bitmap.map((bit, index) => {
            let target = this.resolution.substring(index, index + 1);
            return (bit === 0 || this.options.exclude.includes(target)) ? target : this.characterGenerator.next().value ;
        }).join('');

        this.emit(output);

        return this;
    }

    emit(message) {
        this.listener(message);
        return this;
    }

    sizzle(duration, delay) {
        // todo y-shifted (co)sine wave? total ratio of 1s approaches 1 and then falls back to zero
    }

    obfuscate(duration = 0, delay) {
        let pace = (this.resolution.length > 0 && duration > 0) ? duration / this.resolution.length : this.options.speed;
        pace = (pace > this.options.speed) ? this.options.speed : pace;

        this.queue(pace, Strategy.obfuscateRightToLeftUntilDone, 0, delay);
    }

    resolve(duration = 0, delay) {
        let pace = (this.resolution.length > 0 && duration > 0) ? duration / this.resolution.length : this.options.speed;
        pace = (pace > this.options.speed) ? this.options.speed : pace;

        this.queue(pace, Strategy.revealLeftToRightUntilDone, 0, delay);
        return this;
    }
}
