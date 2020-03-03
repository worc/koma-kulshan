import React from 'react'
import styled from 'styled-components'
import { NavLink, Switch, Route } from 'react-router-dom'

export default () => (
  <NavContainer>
      <TopNav>
          <StyledNavLink to="/encounter">Encounter</StyledNavLink>
          <StyledNavLink to="/trinkets">Trinkets</StyledNavLink>
          <StyledNavLink to='/minor-magic'>Minor Magic</StyledNavLink>
      </TopNav>
      <SubNav>
          <Switch>
              <Route path='/encounter' render={() => {
                  return (
                      <div>
                          <StyledNavLink to='/encounter/on-the-road'>On the road...</StyledNavLink>
                          <StyledNavLink to='/encounter/in-the-desert'>In the desert...</StyledNavLink>
                      </div>
                  )
              }
              }/>

              <Route path='/minor-magic' render={() => {
                  return (
                      <React.Fragment>
                          <StyledNavLink to='/minor-magic/armor'>Armor</StyledNavLink>
                          <StyledNavLink to='/minor-magic/item'>Item</StyledNavLink>
                          <StyledNavLink to='/minor-magic/weapon'>Weapon</StyledNavLink>
                      </React.Fragment>
                  )
              }}/>
          </Switch>
      </SubNav>
  </NavContainer>
)

const NavContainer = styled.div`
  margin: -12px -8px 4px;
`

const TopNav = styled.nav`
  display: flex;
`

const SubNav = styled(TopNav)`
  div {
    justify-content: flex-end;
  }
  
  div a {
    flex: 0 0 auto;
    padding: 0 15px;
  }
  
  div a.active {
    flex: 1 0 auto;
  }
`

const StyledNavLink = styled(NavLink)`
  background-color: #ace;
  border: 1px solid black;
  color: #000;
  flex: 1 0 auto;
  font-variant: all-small-caps;
  height: 1.5rem;
  letter-spacing: 0.1rem;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  
  &.active {
    background-color: #8d88df;
    color: #fff;
  }
`
