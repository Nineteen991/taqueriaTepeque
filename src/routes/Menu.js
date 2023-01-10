import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import uuid from 'react-uuid'

import { MenuGrid, Food, ourMenu, formatPrice } from '../data/MenuGrid'
import { MenuModal } from '../components/MenuModal'
import { Orders } from '../components/Orders'
import { useOrders } from '../Hooks/useOrders'
import { Context } from '../Context'
import menu_bg from '../images/menu_bg.jpg'

const MenuPage = styled.div`
  margin-top: 10vh;
  padding: 5%;
  width: 100%;
  display: grid;
  background-image: url(${menu_bg});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
`
const MenuDiv = styled.div`
  @media(min-width: 640px) { 
    width: 50%;
  }

  @media(min-width: 1200px) {
    width: 60%;
  }
`
const MenuTitleH3 = styled.h3`
  margin-bottom: 3%;
  padding-top: 11vh;
  color: white;
  font-family: 'Francois One', sans-serif;
  font-size: 5rem;
  line-height: 5rem;
  letter-spacing: 1rem;
  text-shadow: 2px 2px black;

  @media(min-width: 640px) {
    padding-top: 0;
    top: 20%;
  }
`

export default function Menu({ openFood, setOpenFood }) {

  const orders = useOrders()
  const { setMenuLinks } = useContext(Context)

  useEffect(() => {
    setMenuLinks('/menu')
  }, [])
  
  return (
    <MenuPage>

      <MenuModal 
        openFood={ openFood } 
        setOpenFood={ setOpenFood }
        orders={ orders }
      />

      <Orders orders={ orders } />

      <MenuDiv>
        { 
          Object.entries(ourMenu).map(([sectionName, sectionArr], index) => (
            <div key={ uuid() }>
              <MenuTitleH3 key={ index } id={`${ sectionName }`}>
                { sectionName }
              </MenuTitleH3>
              
              <MenuGrid key={ uuid() }>
                { 
                  sectionArr.map(menuItem => (
                    <Food 
                      key={ menuItem.id }
                      img={ menuItem.img }
                      onClick={ () => setOpenFood(menuItem) }
                    >
                      <div>{ menuItem.name }</div>
                      <div>{ formatPrice(menuItem.price) }</div>
                    </Food>
                  )) 
                }
              </MenuGrid>
            </div>
          )) 
        }
      </MenuDiv>

    </MenuPage>
  )
}