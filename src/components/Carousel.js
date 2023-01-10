import { useEffect, useState, memo } from 'react'
import styled from 'styled-components'

import { imgArray } from '../data/imgData'
import CarouselItem from './CarouselItem'

const CarouselContainer = styled.div`
  height: 75vh;
  width: 100%;
  clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%);
  display: flex;
  flex-direction: column;
`
const CarouselWrapper = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`
const ArrowBtns = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  opacity: 15%;
  width: 14rem;
  height: 100%;
  background-color: white;
  border: 1px solid #ddd;
  cursor: pointer;

  :hover {
    opacity: 25%;
  }
`
const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`
const CarouselContent = styled.div`
  height: 100%;
  display: flex;
  transition: all 1000ms;
  transition-timing-function: ease-in-out;
  -ms-overflow-style: none;  // hide scrollbar in IE and Edge
  scrollbar-width: none;  // hide scrollbar in Firefox
`

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const renderSlides = imgArray.map((slide, index) => (
    <CarouselItem key={ slide.id } img={ slide.img } />
  ))

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex(prev => (
        currentIndex === imgArray.length - 1
          ? 0
          : prev + 1
      ))
    }, 3000)

    return () => clearTimeout(interval)
  }, [currentIndex])

  function nextSlide() {
    if (currentIndex === imgArray.length -1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(prev => prev + 1)
    }
  }

  function prevSlide() {
    if (currentIndex === 0) {
      setCurrentIndex(imgArray.length - 1)
    } else {
      setCurrentIndex(prev => prev - 1)
    }
  }

  return (
    <CarouselContainer>
      <CarouselWrapper>

        <ArrowBtns onClick={ prevSlide }>
          &lt;
        </ArrowBtns>

          <CarouselContentWrapper>
            <CarouselContent
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              { renderSlides }
            </CarouselContent>
          </CarouselContentWrapper>
            
        <ArrowBtns style={{ right: 0 }} onClick={ nextSlide }>
          &gt;
        </ArrowBtns>

      </CarouselWrapper>
    </CarouselContainer>
  )
}

export default memo(Carousel)