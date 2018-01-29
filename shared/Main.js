import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Trinkets from './Trinkets';

export default () => {
    return (
        <Switch>
            <Route path='/trinkets' exact component={ Trinkets } />
        </Switch>
    )
}
