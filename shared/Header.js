import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getFromShuffled } from "../util/Generators";

const headers = [
    'thunder rolling to higher mountainsides',
    'where even the fish are too wet',
    'those nearby highlands',
    'near the loud and dangerous mountain',
    'the birds here do not shut up',
    'this river really loves driftwood',
    'not a bad place to stay the night',
    'they will actually make you food in the morning',
    'goat snare (this kills the goat)',
    'meet here to check out the mountain view',
    'you will feel a lot better swimming here',
    'by and by... it is what it is... so it goes... ',
    'not a good place to fall into the water',
]

export default () => {
    const [headline, setHeadline] = useState('')
    const headerDeck = getFromShuffled(headers)

    useEffect(() => {
        setHeadline(headerDeck.next().value)
    })

    return (
      <Header>
          <div>
              { headline }
              <Hack/>
          </div>
      </Header>
    )
}

const Header = styled.header`
  display: inline-block;
  width: 100%;
  font-size: 0.8rem;
  font-variant-caps: all-small-caps;
  letter-spacing: 0.1rem;
  text-align: justify;
`

// this takes the place of an :after pseudo class that would trigger
// text-align: justify to work correctly

// after content to trigger justify:
// https://stackoverflow.com/a/43728929/769780

// pseudo classes in react:
// https://stackoverflow.com/questions/28269669/css-pseudo-elements-in-react

// span or div pretends to be a really long word hack (what i'm using here):
// https://stackoverflow.com/a/22950810/769780
const Hack = styled.div`
  display: inline-block;
  width: 100%;
`
