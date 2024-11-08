import React, { useEffect } from 'react'
import Hero from '../components/hero'
import Products from '../components/products'
import AOS from "aos"
import 'aos/dist/aos.css'
import TopRate from '../components/topRate'

const Home = () => {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-out",
      delay:100
    })
    AOS.refresh()
  },[])

  return (
    <div>
      <Hero/>
      <Products/>
      <TopRate />
    </div>
  )
}

export default Home