import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  cursor: pointer;
  flex: 0 0 auto;
  font-variant-caps: all-small-caps;
  letter-spacing: 0.2rem;
  margin: 0 -8px;
`

const ReshuffleButton = styled.div`
  align-items: center;
  background-color: #8d88df;
  border: 1px solid black;
  color: white;
  display: flex;
  height: 2.5rem;
  justify-content: center;
  line-height: 1;
`

const SubShufflesGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const SubShuffle = styled.div`
  align-items: center;
  background-color: #ace;
  border: 1px solid black;
  display: flex;
  flex: 1 0 auto;
  height: 2.5rem;
  justify-content: center;
  line-height: 1;
  padding: 0 10px;
`

const Reshuffle = ({ reshuffleHandler, subShuffles }) => (
  <Container onClick={ reshuffleHandler }>
    <ReshuffleButton>reshuffle</ReshuffleButton>
    <SubShufflesGroup>
      {
        subShuffles.map((sub, i) => (
          <SubShuffle key={i}>
            {sub}
          </SubShuffle>
        ))
      }
    </SubShufflesGroup>
  </Container>
)

export default Reshuffle
