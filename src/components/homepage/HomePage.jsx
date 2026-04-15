import React from 'react'
import Banner from './banner/Banner'
import Card from './card/Card'
import Footer from './footer/Footer'
import AllKeepers from './AllKeepers'

const HomePage = () => {
  return (
    <div>
        <Banner />
        <Card />
        <AllKeepers />
        <Footer />
    </div>
  )
}

export default HomePage