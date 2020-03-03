import React, { useState, useEffect } from 'react';
import Bamboozle from 'bamboozle'

export default ({ reveal }) => {
  const [currentReveal, setCurrentReveal] = useState()

  useEffect(() => {
    const confuser = new Bamboozle(status => {
      setCurrentReveal(status.message)
    }, reveal, {
      characters: [
        '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎', // U+258x
        '▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟', // U+259x
      ].join(''),
      exclude: '. ',
      speed: 50,
    })

    confuser.start()
    confuser.reveal(1100)

    return () => {
      confuser.stop()
    }
  }, [reveal])

  return <span>{ currentReveal }</span>
}
