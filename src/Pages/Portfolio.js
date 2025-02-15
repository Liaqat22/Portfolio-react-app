import React from 'react'
import ProjectCard from './ProjectCard';
import { projectContent } from '../ProjectData/Data';
import { Grid2 } from '@mui/material';


function Portfolio() {
  return (
    <>

      <div className='container-fluid flex flex-col gap-4 '>
        <h3 className=' section-head text-4xl mt-3' data-aos="fade-down" >My Projects</h3>
        <Grid2 container spacing={2} columns={12} className="mt-3">
          {projectContent.map((p, i) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} className='col-md-3 mt-3 !cursor-pointer' key={i}>
              <ProjectCard cardDetails={p} />

            </Grid2>
          ))}
        </Grid2>
      </div>




    </>
  )
}

export default Portfolio
