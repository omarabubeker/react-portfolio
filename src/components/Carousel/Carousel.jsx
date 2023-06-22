import React from 'react'
import styled from 'styled-components'
import SliderComp from './Slider'

const Container = styled.div`
width: 100%;
margin: 0 auto;
max-width: 1280px;
padding: 3rem 0;
text-align: center;
`
const Slide = styled.div`
`

const Carousel = () => {
  return (
    <Container>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Carousel