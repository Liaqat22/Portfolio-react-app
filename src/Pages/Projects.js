import React from 'react'
import { NavLink } from 'react-router-dom'
import { projectContent } from '../ProjectData/Data';
import ProjectCard from './ProjectCard';
import {  Typography } from '@mui/material';


function Projects() {

  return (
    <>
      <div className='container-fluid'>
        <Typography variant="h4"  className=' section-head' data-aos="fade-down" gutterBottom> latest projects</Typography>
        <div className='row'>
          {projectContent?.slice(0, 4)?.map((p, i) => (

            <div className='col-md-3 mt-3' key={i + 1}>
              <ProjectCard cardDetails={p} />
            </div>
          ))}
        </div>
      </div>


      <div className='d-flex justify-content-center pb-3 '>
        <NavLink className='btn btn-light m-3 viewall' to='/portfolio' style={{ color: "#005199" }}>
          <Typography variant='h6' >
            <b>  View All </b>
          </Typography>
        </NavLink>

      </div>


    </>
  )
}

export default Projects
