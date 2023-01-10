import styled from 'styled-components'

import { formatPrice } from '../data/MenuGrid'
import { useQuantity } from '../Hooks/useQuantity'
import { QuantityInput } from './QuantityInput'
import { useMeats } from '../Hooks/useMeats'
import { Meats } from './Meats'

const ModalDiv = styled.div`
  width: 50rem;
  background-color: white;
  position: fixed;
  clip-path: polygon(95% 0%, 100% 5%, 100% 100%, 5% 100%, 0% 95%, 0% 0%);
  border-radius: 2rem;
  top: 20vh;
  left: calc(50% - 25rem);
  z-index: 5;
  max-height: calc(100% - 10rem);
  display: flex;
  flex-direction: column;

  @media(max-width: 40rem) {
    width: 100%;
    left: 0;
    z-index: 12;
  }
`
const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`
const FoodImg = styled.div`
  min-height: 20rem;
  ${({ img }) => (
    img ? 
      `background-image: url(${ img })` :
      'min-height: 7.5rem'
  )};
  background-position: center;
  background-size: cover;
`
const FoodNameH1 = styled.h1`
  position: absolute;
  padding: .5rem 1.5rem;
  font-family: 'Francois One', sans-serif;
  font-size: 3rem;
  color: white;
  letter-spacing: 1rem;
  text-shadow: 2px 2px black;
`
const ModalContentDiv = styled.div`
  padding: 2rem 0;
  overflow: auto;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FoodDescDiv = styled.div`
  padding: 0 2rem 2rem;
  font-family: 'Francois One', sans-serif;
`
const GlutenMsg = styled.span`
  margin-left: 1rem;
  font-family: 'Francois One', sans-serif;
  color: green;
`
const ConfirmBtn = styled.button`
  height: 3rem;
  width: 50%;
  margin-top: 2rem;
  color: white;
  border-radius: 2rem;
  text-align: center;
  cursor: pointer;
  background-image: var(--bg-primary);
  font-family: 'Francois One', sans-serif;
  letter-spacing: .25rem;
`

export function getPrice(order) {
  return order.price * order.quantity
}

function FoodContainer({ openFood, setOpenFood, orders }) {

  const quantity = useQuantity()
  const meats = useMeats()

  function closeModal() {
    setOpenFood(null)
  }

  const order = {
    ...openFood,
    quantity: quantity.quantity,
    meat: meats.whichMeat
  }

  function addToOrder() {
    orders.setOrders(prevOrder => [...prevOrder, order])
    closeModal()
  }

  return (
    openFood ? (
      <div>
        <ModalShadow onClick={closeModal} />

        <ModalDiv>

          <FoodImg img={ openFood.img }>
            <FoodNameH1>{ openFood.name }</FoodNameH1>
          </FoodImg>
          
          <ModalContentDiv>
            <FoodDescDiv>
              { openFood.desc }
              { 
                openFood.glutenFree 
                  ? <GlutenMsg>- Gluten Free -</GlutenMsg> 
                  : null
              }
            </FoodDescDiv>
            { 
              !openFood.seafoodOrVeggie && (openFood.section !== 'Beverages')
                ? <Meats { ...meats } /> 
                : null
            }
            <QuantityInput quantity={ quantity } />
            <ConfirmBtn onClick={ addToOrder }>
              Add to Order: { formatPrice(getPrice(order)) }
            </ConfirmBtn>
          </ModalContentDiv>

        </ModalDiv>

      </div>
    ) : null
  )
}

export function MenuModal(props) {
  if (!props.openFood) {
    return null
  }
  return <FoodContainer { ...props } />
}