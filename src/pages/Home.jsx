import React from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Home() {
  return (
    <div>
        <Carousel/>
        <Features/>
        <Card/>
    </div>
  )
}

export default Home