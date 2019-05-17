import React, { useState, useEffect } from 'react';
import Confuse from '../util/Confuse';

export default ({ reveal }) => {
  const [currentReveal, setCurrentReveal] = useState()

  useEffect(() => {
    const confuser = new Confuse(message => setCurrentReveal(message), reveal, {
      // todo let Confuse handle arrays of characters
      // todo fix Confuse memory leak?
      // use bamboozle npm package directly
      characters: [
        '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎', // U+258x
        '▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟', // U+259x
      ].join(''),
      exclude: '. ',
      speed: 50,
    })

    confuser.loop(750).resolve(750)

    return () => {
      confuser.pause()
    }

  }, [reveal])

  return <span>{ currentReveal }</span>
}
