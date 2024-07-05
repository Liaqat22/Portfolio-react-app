import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { message, Spin } from 'antd';


function Portfolio() {
  const [projects , setProjects] = useState([])
  const [ loading , setLoadng] = useState(false)


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
  return (
    <>
   
   <div className='container-fluid containerfluid mt-0' style={{ overflow: 'hidden' }}>
         {
        projects.map((project, i) => (
            <div className='row' key={project._id}>
            <div className='text-center m-3'>
       {loading&&  <Spin tip="Loading" size="large"/>}
      </div>
                <h1 className='headings'>- Project {i + 1}</h1>
              <div className='col-md-6'>
                <h1 className='headingxl 'style={{color:"#f8f7ff"}}>{project.name}</h1>
                <p className='paratext ' data-aos="fade-right">
                  {project.description}
                </p>



              </div>
              <div className='col-md-6' data-aos="fade-left">
                <img className="imgproject" src={`https://personal-portfolio-api-s.vercel.app/api/v1/project/project-photo/${project._id}`} alt='.' />
              </div>
              
              <div className='btun m-3 p-3' data-aos="fade-left"><i className="fa-solid fa-arrow-right" style={{ color: 'yellow'}} />
                  <NavLink
                    className='btn btn-secondary projectbtn'
                    to={project.link}
                    style={{ background: 'transparent', color: 'yellow' }}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Click to explore
                  </NavLink>
                </div>
            </div>
        ))
      }
          </div>




    </>
  )
}

export default Portfolio
