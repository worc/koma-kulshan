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

/**
 * todo, obfuscate or a higher-order piece? as a generator function?
 *
 * @param message
 * @param bitmap
 * @param characters
 * @param exclude
 * @returns {string}
 */
function obfuscate(message = '', bitmap = [], characters = '', exclude = '') {
    return message;
}

export default class Confuse {
    /**
     *
     * @param listener
     * @param message
     * @param options
     */
    constructor(listener = (message) => { console.log(message) }, message = '', options = {
        characters: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?',
        exclude: ' ',
        startBaffled: true,
        speed: 50,
    }) {
        this.options = { options };

        this.listener = listener;
        this.message = message;
        this.bitmap = this.message.split('').map(() => (this.options.startBaffled) ? 1 : 0 );
        this.baffling = obfuscate(this.message, this.bitmap, this.options.characters, this.options.exclude)
    }

    step() {
        // todo obfuscate as both noun and verb? and shrinking the call chain by one step?
        // todo obfissgit (the noun)
        // todo obfusgate (the verb)
        // aka:
        // this.listener(this.obfuscate) or this.listener(this.obfuscate());

        this.baffling = obfuscate(this.baffling);
        this.listener(this.baffling);
        return this;
    }

    once() {
        // todo baffle fully and then pause
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

    resolve() {

    }
}
