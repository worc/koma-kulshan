import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components'
import Trinkets from './Trinkets';
import MinorMagic from './minor-magic/_MinorMagic';
import Encounter from './encounter/_Encounter';

export default () => (
  <MainStyle>
      <Switch>
          <Route path='/trinkets' exact component={ Trinkets } />
          <Route path='/minor-magic/:type?' component={ MinorMagic } />
          <Route path='/encounter/:type?' component={ Encounter } />
      </Switch>
  </MainStyle>
)

const MainStyle = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 0 auto;
`
