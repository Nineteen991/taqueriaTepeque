import React from 'react'
import styled from 'styled-components'

const MeatDiv = styled.div`
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media(max-width: 40rem) {
    grid-template-columns: 1fr 1fr;
  }
`

const CheckboxLabel = styled.label`
  cursor: pointer;
`

const MeatCheckbox = styled.input`
  margin: 0 1rem;
  cursor: pointer;
`

export function Meats({ meats, meatChoice }) {
console.log(meats)
  return (
    <MeatDiv>
      {
        meats.map((meat, index) => (
          <CheckboxLabel key={ index }>
            <MeatCheckbox
              type='radio'
              name='meat'
              value={ meat.meat }
              checked={ meat.checked }
              onChange={ (e) => meatChoice(e) }
            />
            { meat.meat }
          </CheckboxLabel>
        ))
      }
    </MeatDiv>
  )
}