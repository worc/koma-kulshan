import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

export default () => {
    return (
        <div style={{ margin: '-10px -10px 10px' }}>
            <nav id='topnav'>
                <NavLink to="/encounter">Encounter</NavLink>
                <NavLink to="/trinkets">Trinkets</NavLink>
                <NavLink to='/minor-magic'>Minor Magic</NavLink>
            </nav>
            <nav id='subnav'>
                <Switch>
                    <Route path='/encounter' render={() => {
                        return (
                            <NavLink to='/encounter/on-the-road'>On the road...</NavLink>
                        )
                    }
                    }/>

                    <Route path='/minor-magic' render={() => {
                        return (
                            <React.Fragment>
                                <NavLink to='/minor-magic/armor'>Armor</NavLink>
                                <NavLink to='/minor-magic/item'>Item</NavLink>
                                <NavLink to='/minor-magic/weapon'>Weapon</NavLink>
                            </React.Fragment>
                        )
                    }}/>
                </Switch>
            </nav>
        </div>
    )
};
