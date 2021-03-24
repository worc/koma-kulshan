import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components'
import Trinkets from './trinkets/Trinkets';
import MinorMagic from './minor-magic/_MinorMagic';
import Encounter from './encounter/_Encounter';
import Voices from './voices/_Voices.js'

export default () => (
  <MainStyle>
      <Switch>
          <Route path='/trinkets' exact component={ Trinkets } />
          <Route path='/minor-magic/:type?' component={ MinorMagic } />
          <Route path='/encounter/:type?' component={ Encounter } />
          <Route path='/voices' component={ Voices }/>
      </Switch>
  </MainStyle>
)

const MainStyle = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 0 auto;
`
