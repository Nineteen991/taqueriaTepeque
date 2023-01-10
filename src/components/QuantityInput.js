import React from 'react'
import styled from 'styled-components'

const QuantityDiv = styled.div`
  display: flex;
  justify-content: center;
`

const InputQuantity = styled.input`
  height: 2.4rem;
  width: 2.4rem;
  font-size: 2rem;
  text-align: center;
  border: none;
`

const IncrementButtons = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  line-height: 2.4rem;
  margin: 0 1rem;
  // color: var(--bg-primary);
  font-size: 2rem;
  text-align: center;
  cursor: pointer;
  border: 1px solid #f44336;

  display: flex;
  justify-content: center;
  align-items: center;
`

export function QuantityInput(props) {

  const { quantity, setQuantity, makeSureItsANumber } = props.quantity

  function decreaseQuantity() {
    if (quantity < 1) {
      setQuantity(1)
    } else if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  function increaseQuantity() {
    setQuantity(prev => prev + 1)
  }

  return (
    <QuantityDiv>
      <div>Quantity:</div>
      <IncrementButtons 
        onClick={ decreaseQuantity }
        disabled={ +quantity === 1 }
      >
        -
      </IncrementButtons>

        <InputQuantity 
          value={ quantity }
          onChange={ (e) => makeSureItsANumber(e) }
        />

      <IncrementButtons 
        onClick={ increaseQuantity }
      >
        +
      </IncrementButtons>
    </QuantityDiv>
  )
}