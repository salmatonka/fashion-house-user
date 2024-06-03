import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../../Category/Category'
import Feature from '../Feature/Feature'
import Slider from '../Slider/Slider'
import BuildShare from '../BuildShare/BuildShare'
import HeadLine from '../HeadLine/HeadLine'
import GallerySection from '../GallerySection/GallerySection'
import Testimonials from '../Testimonials/Testimonials'
// style={{ backgroundColor: '#171615', color: '#E0C264' }}

const Home = () => {
  return (
    <div className='bg-blue-200'>
  <HeadLine />
      <Banner />
      <Category />
      <Feature />
      <GallerySection />
      <BuildShare />
          <Testimonials />
          <Slider />
    </div>
  )
}

export default Home
