import styled from 'styled-components'

import { formatPrice } from '../data/MenuGrid'
import { getPrice } from './MenuModal'

const OrdersDiv = styled.div`
  position: fixed;
  width: 90%;
  padding: 2rem 0;
  background-image: var(--bg-primary);
  clip-path: polygon(95% 0%, 100% 5%, 100% 100%, 5% 100%, 0% 95%, 0% 0%);
  border-radius: 2rem;

  @media(min-width: 640px) {
    right: 5%;
    max-height: 50vh;
    width: 40%;
  }

  @media(min-width: 1200px) {
    width: 31%;
  }
`
const OrderContent = styled.div`
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const OrdersH1 = styled.h1`
  align-self: center;
  font-family: 'Francois One', sans-serif;
  font-size: 2rem;
  color: white;
  letter-spacing: .5rem;
`
const OrderItem = styled.div`
  padding: 0 2rem;
  color: white;
  font-family: 'Francois One', sans-serif;

  display: grid;
  grid-template-columns: 1fr 4fr 2fr 1fr;
  justify-content: space-between;

  :first-of-type {
    padding-top: 2rem;
  }
`

export function Orders(props) {
  const{ orders, setOrders } = props.orders  
  
  function deleteItem(index) {
    const newOrders = [...orders]
    newOrders.splice(index, 1)
    setOrders(newOrders)
  }

  const subtotal = orders.reduce((itemTotal, order) => {
    return itemTotal + getPrice(order)
  }, 0)

  const tax = subtotal * .0925
  const total = subtotal + tax

  return (
    <OrdersDiv>
      <OrderContent>
        <OrdersH1>Your Cart</OrdersH1>

        { orders.length > 0 && (
          <>
            { 
              orders.map((order, index) => (
                <OrderItem key={ index }>
                  <div>{ order.quantity }</div>
                  <div>
                    { order.name } { order.meat && <i>- {order.meat}</i> }
                  </div>
                  <div>{ formatPrice(getPrice(order)) }</div>
                  <div 
                    onClick={ () => deleteItem(index) }
                    style={{ cursor: 'pointer' }}
                  >
                    🗑️
                  </div>
                </OrderItem>
                
              ))
            }
            
            <OrderItem style={{ marginTop: '2rem' }}>
              <div />
              <div>Subtotal:</div>
              <div>{ formatPrice(subtotal) }</div>
            </OrderItem>

            <OrderItem>
              <div />
              <div>Tax:</div>
              <div>{ formatPrice(tax) }</div>
            </OrderItem>

            <OrderItem style={{ marginTop: '2rem' }}>
              <div />
              <div>Total:</div>
              <div>{ formatPrice(total) }</div>
            </OrderItem>
          </>
        )}

      </OrderContent>
    </OrdersDiv>
  )
}