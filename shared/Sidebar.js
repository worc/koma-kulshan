import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

export default () => {
    return (
        <div style={{ display: 'none' }}>
            <NavLink to="/trinkets">Trinkets</NavLink>
            <NavLink to='/minor-magic'>Minor Magic</NavLink>
            <Switch>
                <Route path='/minor-magic' render={ () => {
                        return (
                            <div>
                                <NavLink to='/minor-magic/armor'>Armor</NavLink>
                                <NavLink to='/minor-magic/item'>Item</NavLink>
                                <NavLink to='/minor-magic/weapon'>Weapon</NavLink>
                            </div>
                        )
                    }
                } />

            </Switch>
        </div>
    )
}
