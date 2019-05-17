import React from 'react'
import styled from 'styled-components'
import Reveal from "../Reveal"

export default ({ prefix, name, suffix, firstDescription, secondDescription }) => (
  <ItemContainer>
    <div>
      <StyledHeader>
        <Reveal reveal={ prefix } /><span> </span>
        <Reveal reveal={ name } /><span> </span>
        <Reveal reveal={ suffix } />
      </StyledHeader>
    </div>

    <div>
      <p><StyledReveal reveal={ firstDescription }/></p>
      <p><StyledReveal reveal={ secondDescription }/></p>
    </div>
  </ItemContainer>
)

const ItemContainer = styled.div`
  flex: 1 0 auto;
`

const StyledHeader = styled.h2`
  font-family: "Rammetto One", cursive;
  font-size: 1.4rem;
  font-weight: normal;
  margin: 0;
`

const StyledReveal = styled(Reveal)`
  font-family: "Menlo", "DejaVu Sans Mono", monospace;
`
