import React from 'react'
import Projects from './Projects'
import Skills from './Skills'
import Services from './Services'
import HomeHero from '../homeItems/HomeHero'
import Scrolltriggers from './Scrolltriggers'
import WorkTogather from './WorkTogather'



function Home() {
  return (
    <div className='flex flex-col gap-5'>
      <HomeHero />
      <Skills />
      <Services />
      <Projects />
      <Scrolltriggers />
      <WorkTogather />



    </div>
  )
}

export default Home
