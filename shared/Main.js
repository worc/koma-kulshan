import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Trinkets from './Trinkets';
import MinorMagic from './minor-magic/_MinorMagic';
import Encounter from './encounter/_Encounter';

export default (props) => {
    return (
        <div style={props.style}>
            <Switch>
                <Route path='/trinkets' exact component={ Trinkets } />
                <Route path='/minor-magic/:type?' component={ MinorMagic } />
                <Route path='/encounter/:type?' component={ Encounter } />
            </Switch>
        </div>
    )
}
