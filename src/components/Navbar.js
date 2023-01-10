import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as Scroll from 'react-scroll'

import facebookIcon from '../images/facebook.jpg'
import foursquareIcon from '../images/foursquare.png'
import { ourMenu } from '../data/MenuGrid'
import { Context } from '../Context'

const Nav = styled.nav`
  position: fixed;
  height: 10vh;
  width: 100%;
  top: 0;
  z-index: 100;
  background-image: var(--bg-primary);
  display: flex;
  align-items: center;
`
const NavTitle = styled.h1`
  margin-right: auto;
  padding: 0 2rem;
  font-family: var(--title);
  font-size: 3rem;
  line-height: 3rem;
  color: white;
  text-shadow: 2px 2px black;
`
const NavLinksUl = styled.ul`
  width: 50%;
  // padding: 0 2rem;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const NavLinksLi = styled.li`
  color: white;
  cursor: pointer;
  padding: 0 .5rem
`
const MenuLinksUl = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const MenuLinksLi = styled.li`
  margin-left: 2rem;
  font-family: 'Francois One', sans-serif;
  color: white;
  cursor: pointer;
`
const SocialMediaDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const SocialMediaLinks = styled.a`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SocialMediaImages = styled.img`
  height: 2rem;
  width: 2rem;
`

export default function Navbar() {
  const { menuLinks } = useContext(Context)
  const ScrollLink = Scroll.Link
  
  return (
    <Nav>
      <NavTitle><Link to='/'><p>Taqueria</p><p>Tepeque</p></Link></NavTitle>

      <NavLinksUl>

        <NavLinksLi>
          { 
            menuLinks === '/home' 
              ? <Link to='/menu'>Menu</Link> 
              : <MenuLinksUl>
                  { 
                    Object.entries(ourMenu).map(([sectionName], index) => (
                      <ScrollLink
                        to={ sectionName }
                        spy={ true }
                        smooth={ true }
                        duration={ 500 }
                        key={ index }
                      >
                        <MenuLinksLi>{ sectionName }</MenuLinksLi>
                      </ScrollLink>
                    ))
                  }
                </MenuLinksUl>
          }
        </NavLinksLi>

        <NavLinksLi>
          <ScrollLink
            to='contact'
            spy={ true }
            smooth={ true }
            duration={ 500 }
          >
            <Link to='/#contact'>Contact</Link>
          </ScrollLink>
        </NavLinksLi>

        <NavLinksLi>
          <SocialMediaDiv>

            <SocialMediaLinks href="https://www.facebook.com/TaqueriaTepequeCapitola/">
              <SocialMediaImages src={facebookIcon} alt='facebook' />
            </SocialMediaLinks>

            <SocialMediaLinks href="https://foursquare.com/v/taqueria-tepeque/4c0069ebad46c9b6d07f8f66">
              <SocialMediaImages src={foursquareIcon} alt='foursquare' />
            </SocialMediaLinks>

          </SocialMediaDiv>
        </NavLinksLi>

      </NavLinksUl>
    </Nav>
  )
}