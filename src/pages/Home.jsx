import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import TourManagement from '../components/TourManagement'
import RecentBlogPosts from '../components/RecentBlogPosts'
import Testimonials from '../components/Testimonials'
import TopDestination from '../components/TopDestination'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero /> 
        <About />
        <Services />
        <TourManagement />
        <RecentBlogPosts />
        <Testimonials/>
        <TopDestination />
        <Footer />
    </div>
  )
}

export default Home