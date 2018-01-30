import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Trinkets from './Trinkets';
import MinorMagic from './minor-magic/_MinorMagic';

export default () => {
    return (
        <Switch>
            <Route path='/trinkets' exact component={ Trinkets } />
            <Route path='/minor-magic/:type?' component={ MinorMagic } />
        </Switch>
    )
}
