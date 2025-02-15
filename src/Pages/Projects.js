import React from 'react'
import { NavLink } from 'react-router-dom'
import { projectContent } from '../ProjectData/Data';
import {  Grid2 } from '@mui/material'
import ProjectCard from './ProjectCard';


function Projects() {

  return (
    <div className='container-fluid flex flex-col gap-3'>
      <h3 className=' section-head text-4xl' data-aos="fade-down" >My Projects</h3>

      <Grid2 container spacing={2} columns={12} className="mt-3">
          {projectContent.slice(0,4).map((p, i) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} className=' mt-3 !cursor-pointer' key={i}>
              <ProjectCard cardDetails={p} />

            </Grid2>
          ))}
        </Grid2>


      <div className='flex justify-center pb-3 mt-3'>
        <NavLink className=' viewall' to='/portfolio' >
           
          <button  className='px-3 py-2  bg-gradient-to-l from-[#2095ac] to-[#0166b3] font-semibold flex items-center justify-center min-w-[140px] rounded-sm'>
                  <span className='text-white'> View All</span>
                </button>
        </NavLink>

      </div>


    </div>
  )
}

export default Projects
