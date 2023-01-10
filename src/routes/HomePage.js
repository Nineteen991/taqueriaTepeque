import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

import Carousel from '../components/Carousel'
import { Context } from '../Context'

const HomePageDiv = styled.div`
    width: 100%;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TitleDiv = styled.div`
    height: 90vh;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TitleH1 = styled.h1`
    color: white;
    font-family: var(--title);
    font-size: 15rem;
    text-shadow: 5px 5px black;
    letter-spacing: 1rem;
    text-align: center;
    line-height: 16rem;
`
const TitleH3 = styled.h3`
    color: white;
    font-family: 'Francois One', sans-serif;
    font-size: 5rem;
    letter-spacing: 1rem;
    text-align: center;
`
const ContactAndCarousel = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media(min-width: 1000px) {
        flex-direction: row;
    }
`
const Contact = styled.div`
    width: 100%;
    padding: 2rem 7rem;
    margin-bottom: 5rem;
    display: flex;
    background-image: linear-gradient(45deg, var(--pink), var(--purple));
    clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%);

    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 1000px) {
        margin-bottom: 0;
    }

    @media(min-width: 3500px) {
        padding: 2rem 10rem;
    }
`
const ContactH5 = styled(TitleH3)`
    padding: 1rem 0;
    font-size: 2rem;
    letter-spacing: 0;
`

export default function HomePage() {
    const {menuLinks, setMenuLinks} = useContext(Context)

    useEffect(() => {
        if (menuLinks !== '/home') {
            setMenuLinks('/home')
        }
    }, [])

    return (
        <HomePageDiv>

            <TitleDiv>
                <TitleH1>Taqueria Tepeque</TitleH1>
                <TitleH3>AUTHENTIC</TitleH3>
                <TitleH3>MEXICAN CUISINE</TitleH3>
            </TitleDiv>

            <ContactAndCarousel>
                <Contact id='contact'>
                    <TitleH3>CONTACT US</TitleH3>
                    <ContactH5>
                        Taqueria Tepeque is located inside Brown Ranch Market Place
                    </ContactH5>
                    <ContactH5>3555 Clares St.  Suite LL</ContactH5>
                    <ContactH5>Capitola , CA  95010</ContactH5>
                    <ContactH5>Tel: 831-462-2758</ContactH5>
                </Contact>
                <Carousel />
            </ContactAndCarousel>

        </HomePageDiv>
    )
}