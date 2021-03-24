import React from 'react'
import voices from './voice_acting_list.js'
import shuffle from '../util/shuffle'

export default () => {
  const list = shuffle(voices).slice(0, 12)

  return (
    <ul>
      {
        list.map((voice, i) => <li key={i}>{voice}</li>)
      }
    </ul>
  )
}
