import React, {  useState } from 'react'
import { NavLink } from 'react-router-dom'
import cv from '../media/Liaqat Ali-React-Developer.pdf'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import dp from '../media/dvStTTcICreSRyr97FsFO-removebg-preview_0 (1).png'
import Projects from './Projects'
import Skills from './Skills'
import { Button, Card, CardContent, Typography } from '@mui/material'
import Services from './Services'
import { projectContent } from '../ProjectData/Data'



function Home() {


  const [counton, setCounton] = useState(false)
  const tDelaypoint1s = {
    transitionDelay: '1s'
  }
  const tDelaypoint05s = {
    transitionDelay: '0.3s',
  }


 

  const countDown = [
    { text: "Happy Clients", counts: counton && <CountUp start={0} end={4} duration={3} delay={0} /> },
    { text: "Projects Done", counts: counton && <CountUp start={0} end={projectContent?.length + 10} duration={3} delay={0} /> },
    { text: "Courses", counts: counton && <CountUp start={0} end={5} duration={4} delay={0} /> ,},
    { text: "Years Experience", counts: counton && <CountUp start={0} end={1} duration={3} delay={0} /> },
  ]
  return (
    <div>

      <div className='container-fluid  '>
        <div className='row '>
          <div className='col-md-6 mt-3'>
            <Typography className='head2'>- Introducing</Typography>
            <Typography variant='h3' className='name'>Hello,<br />I'm <span className="myname"> Liaqat Ali</span></Typography>
            <Typography className=' p-2' gutterBottom data-aos="fade-left" style={tDelaypoint1s}>
              Since beginning my journey as a React developer nearly a year ago, I've worked with Eziline Software House, consulted for startups, and collaborated with talented individuals to create responsive websites. </Typography>
            <NavLink className=' mx-1' to='/contact' ><Button variant="contained" sx={{ color: 'white', fontWeight: "bold", background: "#00b4d8" }}>
              Contact me
            </Button></NavLink>
            <Button variant='contained' href={cv} download="" className=' mx-1' sx={{ color: 'white', fontWeight: "bold", background: "#00b4d8" }}>Download CV</Button>
          </div>
          <div className='col-md-6 bgdpimg text-center mt-3' data-aos="zoom-in" style={tDelaypoint05s} >

            <div data-aos="fade-up" style={tDelaypoint1s}>
              <img className="imgdp" src={dp} alt='dp' />
            </div>

          </div>
        </div>
      </div>
            {/* ====================== skills ======================= */}

      <div className='container-fluid' >
        <div className='row m-3'>
        <Skills />
        </div>
      </div>

      {/* ======================== Services ========================= */}
      <Services />

      {/* =========================== projects ======================== */}
      <Projects />

      <ScrollTrigger onEnter={() => setCounton(true)} >
        <div className='container-fluid'>
            <div className='row  '>
          {countDown.map((item,i) => (

              <div className='col-md-3   mt-3'  key={i+1}>
                <Card data-aos="fade-right" className='bg-image' >
                  <CardContent>
                    <Typography variant='h3' className='head1' color='white' >{item?.counts}</Typography>
                    <Typography variant='h5' className='head1' color='white'>{item?.text}</Typography>
                  </CardContent>
                </Card>
              </div>


))}
            </div>
        </div>
      </ScrollTrigger>

      <div className='container-fluid'>
        <div className='row d-flex justify-content-center' data-aos="fade-out" >
          <div className='col-md-6 p-3 text-center bg-image' >
            <Typography variant="h5" className=' section-head' data-aos="fade-down" gutterBottom>lets work togather</Typography>
            <Typography data-aos="fade-up" className='mb-3' variant='body2'>I'm excited to help with your web development projects, whether building a modern website or optimizing performance. Let's bring your vision to life!</Typography>
            <NavLink to='/contact' className=' mt-3 '>
              <Button variant="contained" sx={{ color: 'white', fontWeight: "bold", background: "#00b4d8", borderRadius: "2rem" }}>
                Contact me
              </Button></NavLink>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home
