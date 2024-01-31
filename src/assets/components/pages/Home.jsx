import React from 'react'
import Products from '../products/Products'
import Analytics from '../analytics/Analytics'
import Testimonials from '../testimonials/Testimonials'
import Slider from '../carousals/Carousel'

function Home() {
  return (
    <>
    <Slider/>
    <Products/>
    <Analytics/>
    <Testimonials/>
    </>
  )
}

export default Home