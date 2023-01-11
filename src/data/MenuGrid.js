import styled from 'styled-components'

import { menuItems } from './imgData'

export const MenuGrid = styled.div`
    display: grid;
    grid-auto-rows: 40vh;
    gap: 3rem;
    padding-bottom: 4rem;

    @media(min-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 3rem;
    }
`
export const Food = styled.div`
  height: 100%;
  padding: 1rem 1.5rem;
  color: white;
  font-family: 'Francois One', sans-serif;
  font-size: 2rem;
  text-shadow: 1px 1px black;
  background-image: ${props => `url(${props.img})` };
  background-position: center;
  background-size: cover;
//   filter: contrast(75%);
  border-radius: 2rem;
  margin-top: .5rem;
  transition-property: box-shadow margin-top filter;
  transition-duration: .1s;
  box-shadow: 0 0 2px 0 gray;

  &:hover {
    cursor: pointer;
    // filter: contrast(100%);
    margin-top: 0;
    margin-bottom: .5rem;
    box-shadow: 0 5px 10px 0 gray;
  }
`

export function formatPrice(price) {
    return price.toLocaleString("en-US", {style: "currency", currency: "USD"})
}

export const ourMenu = menuItems.reduce((prevItem, item) => {
    if (!prevItem[item.section]) {
        prevItem[item.section] = []
    }
    prevItem[item.section].push(item)

    return prevItem
}, {})