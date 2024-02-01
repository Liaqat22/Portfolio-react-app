import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import cv from '../media/Liaqat Ali-React-Developer.pdf'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import dp from '../media/dvStTTcICreSRyr97FsFO-removebg-preview_0 (1).png'
import { message, Spin } from 'antd';
import axios from 'axios';
import Projects from './Projects'



function Home() {
  const [services , setServices] = useState([])
  const [data, setdata] = useState([])
  const [projects , setProjects] = useState([])
  const [ loading , setLoadng] = useState(false)

  const [counton, setCounton] = useState(false)
  const tDelaypoint1s = {
    transitionDelay: '1s'
  }
  const tDelaypoint05s = {
    transitionDelay: '0.3s'
  }

// All services
  const getAllServices = async () => {
    try {
     setLoadng(true)
      const { data } =await axios.get(
        `https://personal-portfolio-api-s.vercel.app/api/v1/services/get-service`);
      if (data?.success) {
        setServices(data?.service)
        setLoadng(false)
              console.log("service got Successfully");  
      }
    } catch (error) {
      console.log(error);
      setLoadng(false)
    }}
    useEffect(()=>{
      getAllServices()
    },[])


//all projects
  
  const getAllProjects = async () => {
    try {
      setLoadng(true)
      const { data } =await axios.get(
        `https://personal-portfolio-api-s.vercel.app/api/v1/project/get-project`);
      if (data?.success) {
        setProjects(data?.projects)
        setLoadng(false)
               console.log("project got Successfully");   
 
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
      setLoadng(false)
    }}
    useEffect(()=>{
      getAllProjects()
    },[])

      // get certificates
  const getCertificate = async() =>{
    try {
      setLoadng(true)
        const {data} = await axios.get("https://personal-portfolio-api-s.vercel.app/api/v1/contacts/get-certificate")
        setdata(data?.Rewards)
        setLoadng(false)
    } catch (error) {
        console.log(error);
        setLoadng(false)
      message.error("something went wrong");
    }
  }
  useEffect(()=>{
    getCertificate()
  },[])
  return (
    <div>

      <div className='container-fluid containerfluid'>
        <div className='row '>
          <div className='col-md-6 mt-3'>
            <h1 className='headings'>- Introducing</h1>
            <h1 className='headingxl name mb-2'>Hello,<br />I'm <span className = "myname">Liaqat Ali</span></h1>
            <p className='paratext m-3' data-aos="fade-left" style={tDelaypoint1s}>
            Since beginning my journey as a React developer nearly a year ago, I've worked with Eziline Software House, consulted for startups, and collaborated with talented individuals to create responsive websites. </p>
            <NavLink className='btn btn-info  m-2' to='/contact' style={{ color: 'white' }}>Contact me</NavLink>
            <a href={cv} download="" className='btn btn-info dwnldbtn m-2' style={{ color: 'white' }}>Download CV</a>
          </div>
          <div className='col-md-6 bgdpimg text-center mt-3' data-aos="zoom-in" style={tDelaypoint05s}>

            <div data-aos="fade-up" style={tDelaypoint1s}>
              <img className="imgdp" src={dp} alt='dp' />
            </div>

          </div>
        </div>

      </div>

      {/* =================================================== Services ========================================================================== */}

      <div className='container-fluid containerfluid' style={{ overflow: 'hidden' }}>
        <h1 className='text-center headingxl services' data-aos="fade-down" >Services</h1>
        <div className='row m-3'>
          {loading&&  <Spin tip="Loading" size="large"/>}
            {services.map((s)=>(
          <div className='col-md-3' key={s._id}>

            <div className="card bg-dark text-white text-center" data-aos="fade-left">
              <div className="card-body">
                <div className=' m-3'>  <i className={`${s.icon} mb-2`} /></div>
                <h5 className="card-title headings"><b>{s.name}</b></h5>
                <p className="card-text paratext">{s.description}</p>
              </div>
            </div>
          </div>
            ))}
          

        </div>

      </div>

      {/* =================================================== projects ===================================================================== */}
 <Projects/>

      <ScrollTrigger onEnter={() => setCounton(true)} >
        <div className='container-fluid containerfluid' style={{ overflow: 'hidden' }}>
            {data.map((item)=>(
          <div className='row countmain d-flex justify-content-evenly align-items-center'>
       {loading&&  <Spin tip="Loading" size="large"/>}

            <div className='col-md-3  countcol countradius' data-aos="fade-up">
              <h1 className='headings count' >{counton && <CountUp start={0} end={item.client} duration={3} delay={0} />}</h1>
              <h1 className='headingxl counttext'>Happy Clients</h1>
            </div>
            <div className='col-md-3 countcol' data-aos="fade-up">
              <h1 className='headings count'>{counton && <CountUp start={0} end={projects.length + 10} duration={3} delay={0} />}</h1>
              <h1 className='headingxl counttext'>Projects Done
              </h1></div>
            <div className='col-md-3 countcol' data-aos="fade-up">
              <h1 className='headings count'>{counton && <CountUp start={0} end={item.certificate} duration={4} delay={0} />}</h1>
              <h1 className='headingxl counttext'>Courses
              </h1></div>
           
            <div className='col-md-3 countcol countradius2' data-aos="fade-up">
              <h1 className='headings count'>{counton && <CountUp start={0} end={item.experience} duration={3} delay={0} />}</h1>
              <h1 className='headingxl counttext'>Years Experience
              </h1></div>

          </div>
            ))}
        </div>
      </ScrollTrigger>

      <div className='container-fluid containerfluid' style={{ overflow: 'hidden' }}>
        <div className='row' data-aos="fade-out" >
          <div className='col-md-1'></div>
          <div className='col-md-10 contactcol' style={{ overflow: 'hidden' }}>
            <h1 className='headings' data-aos="fade-up">Lets Work Together</h1>
            <p className='paratext' data-aos="fade-up">I'm excited to discuss your web development needs and explore how I can contribute to your  projects. Whether you're looking to build a cutting-edge website, enhance your web application's performance, or need assistance with any web development task, I'm here to help!</p>
            <NavLink className='btn btn-info m-3' to='/contact' data-aos="fade-up" style={{ color: '#3c3c3c', boxShadow: 'none', fontWeight: '600' }}>contact me</NavLink>
          </div>
          <div className='col-md-1'></div>

        </div>
      </div>

    </div>
  )
}

export default Home
